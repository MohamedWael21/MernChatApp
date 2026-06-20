# MERN Chat App

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io.

## 🚀 Features

- Real-time messaging with Socket.io
- Authentication with JWT and Cookies
- Global state management with Zustand
- Responsive UI with Tailwind CSS
- Database seeding with RandomUser API

## 📂 Project Structure

```text
├── backend/            # Express server & MongoDB models
│   ├── controllers/    # Route controllers
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── socket/         # Socket.io logic
│   ├── utils/          # Helper functions
│   └── seed.js         # Database seeding script
├── frontend/           # React + Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── pages/      # Application pages
│   │   └── store/      # Zustand state management
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)

### 1. Setup Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   PORT=5000
   DB_URL=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```
4. Seed the database (optional):
   ```bash
   npm run seed
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

### 2. Setup Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Scripts

- **Backend**:
  - `npm run dev`: Starts the server with nodemon.
  - `npm start`: Starts the server with node.
  - `npm run seed`: Clears the DB and seeds 10 male users and random messages.
- **Frontend**:
  - `npm run dev`: Starts the Vite development server.
  - `npm run build`: Builds the production bundle.

## ⚙️ Environment Variables

The backend requires the following environment variables in `backend/.env`:

| Variable | Description |
|----------|-------------|
| `PORT` | The port the server will run on (default: 5000) |
| `DB_URL` | Your MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `NODE_ENV` | the environment (development/production) |

---
