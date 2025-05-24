// src/utils/api.ts
import { useAuth } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

const checkTokenExpiration = () => {
  const tokenExpiration = localStorage.getItem('tokenExpiration');
  if (tokenExpiration && new Date(tokenExpiration) <= new Date()) {
    // Clear auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiration');
    window.location.href = '/auth/login';
    throw new Error('Session expired. Please log in again.');
  }
};

const getToken = () => {
  checkTokenExpiration();
  return localStorage.getItem('token');
};

export const fetchData = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const token = getToken();
    console.log('Sending request:', {
      url: `${API_URL}${endpoint}`,
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body,
    });

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });

    console.log('Response status:', response.status);

    if (response.status === 401) {
      // Handle unauthorized error
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('tokenExpiration');
      window.location.href = '/auth/login';
      throw new Error('Session expired. Please log in again.');
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API call failed: ${response.statusText} (${response.status}): ${errorText}`);
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};


