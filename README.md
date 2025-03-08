# TeamSpace Frontend

## Overview

TeamSpace is a modern and scalable project and workspace management platform. The frontend is built using **React.js**, **TypeScript**, and **Vite.js**, with state management powered by **Redux Toolkit**. It provides a seamless user experience for managing projects, tasks, and team collaboration.

## Features

- **Authentication**
  - Google Sign-In (OAuth)
  - Email and Password authentication
  - Session-based authentication using cookies
- **Workspace Management**
  - Create and manage multiple workspaces
  - Invite team members
  - Assign roles and permissions (Owner, Admin, Member)
- **Project & Task Management**
  - Create, update, and delete projects
  - Manage project epics and tasks
  - Assign tasks to members
  - Set task priority and status
  - Track project progress via analytics dashboard
- **Search & Filters**
  - Filter tasks by status, priority, and assigned member
  - Full-text search for projects and tasks
- **UI & Performance**
  - Responsive design using **TailwindCSS** & **Shadcn UI**
  - Optimized performance with **Vite.js**
  - Pagination & "Load More" functionality

## Tech Stack

- **Frontend:** React.js, TypeScript, Redux Toolkit, Vite.js
- **UI:** TailwindCSS, Shadcn UI
- **State Management:** Redux Toolkit
- **Authentication:** Google OAuth, Cookie-based authentication
- **Backend API:** Express.js (Node.js, MongoDB)

## Installation & Setup

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/isaacoduh/teamspace-frontend.git
   cd teamspace-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create an `.env` file and add the following environment variables:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api  # Backend API URL
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Deployment

### Build for Production

```sh
npm run build
```

This will generate an optimized production-ready build in the `dist/` folder.

### Deploy to Vercel

1. Install the Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```
   Follow the CLI prompts to complete the deployment.

## API Endpoints

The frontend interacts with the following backend API endpoints:

### Auth Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login with email & password
- `POST /api/auth/logout` - Logout the user
- `GET /api/auth/google` - Initiate Google OAuth login
- `GET /api/auth/google/callback` - Handle Google OAuth callback

### Workspace Routes

- `POST /api/workspace/create/new` - Create a new workspace
- `PUT /api/workspace/update/:id` - Update workspace details
- `GET /api/workspace/all` - Fetch all workspaces user is a member of
- `DELETE /api/workspace/delete/:id` - Delete a workspace

### Project Routes

- `POST /api/project/workspace/:workspaceId/create` - Create a project
- `GET /api/project/workspace/:workspaceId/all` - Get all projects in a workspace
- `PUT /api/project/:id/workspace/:workspaceId/update` - Update project details
- `DELETE /api/project/:id/workspace/:workspaceId/delete` - Delete a project
- `GET /api/project/:id/workspace/:workspaceId/analytics` - Get project analytics

### Task Routes

- `POST /api/task/workspace/:workspaceId/project/:projectId/create` - Create a task
- `PUT /api/task/:id/workspace/:workspaceId/project/:projectId/update` - Update a task
- `DELETE /api/task/:id/workspace/:workspaceId/project/:projectId/delete` - Delete a task
- `GET /api/task/workspace/:workspaceId/project/:projectId/all` - Get all tasks in a project

---

Feel free to reach out if you have any questions or suggestions! 🚀
