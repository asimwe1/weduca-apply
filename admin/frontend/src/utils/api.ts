// src/utils/api.ts
const API_URL = 'http://localhost:3000/api';

export const fetchData = async (endpoint: string, options: RequestInit = {}) => {
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
      ...options.headers,
    },
  });
  console.log('Response status:', response.status);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API call failed: ${response.statusText} (${response.status}): ${errorText}`);   
  }
  // Handle 204 No Content by returning an empty array
  if (response.status === 204) {
    return [];
  }
  return response.json();
};



