# Todo CRUD App

A simple MERN stack Todo application that allows users to create, read, update, and delete tasks.

## Features

* Add a new task
* View all tasks
* Edit existing tasks
* Delete tasks
* MongoDB Atlas integration
* REST API using Express.js

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Project Structure

backend/

* models/
* routes/
* server.js

frontend/

* src/

  * App.jsx
  * App.css

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

### Create Task

```http
POST /tasks/add
```

### Get Tasks

```http
GET /tasks
```

### Update Task

```http
PUT /tasks/:id
```

### Delete Task

```http
DELETE /tasks/:id
```

## Learning Outcomes

* React State Management
* REST API Development
* CRUD Operations
* MongoDB Integration
* Client-Server Communication using Axios

## Author

Yashwant Verma
