# Weduca Admin Portal

A comprehensive student application management system built with React, Node.js, and MongoDB.

## Features

- **Application Management**
  - Create and track student applications
  - Upload and manage application documents
  - Process applications with status updates
  - View application statistics and analytics

- **Student Management**
  - Manage student profiles
  - Track application history
  - Handle student communications

- **Institution Management**
  - Manage partner institutions
  - Track institution-specific requirements
  - View institution-wise statistics

- **Document Management**
  - Secure document upload to Cloudinary
  - Support for multiple file types (PDF, DOC, DOCX, ZIP, images)
  - Document version control

- **Authentication & Security**
  - JWT-based authentication
  - Role-based access control
  - Secure file handling

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- ShadcnUI components
- React Query for data fetching
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Cloudinary for file storage
- Swagger for API documentation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account
- npm or yarn

### Environment Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weduca-admin
   ```

2. Create .env files:

   Backend (.env):
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

   Frontend (.env):
   ```
   VITE_API_URL=http://localhost:3000
   ```

### Installation

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- API Documentation: http://localhost:3000/api-docs

## API Documentation

The API documentation is available through Swagger UI at `/api-docs` when the server is running. It provides detailed information about:
- Available endpoints
- Request/response formats
- Authentication requirements
- Data models

## Project Structure

```
weduca-admin/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   └── server.js       # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── lib/        # Utilities and helpers
│   │   ├── hooks/      # Custom React hooks
│   │   └── App.tsx     # Main application component
│   └── index.html
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 