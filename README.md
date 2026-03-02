# 🛒 eStore

A full-stack ecommerce web application built with **ReactJS**, **Redux**, **Node.js**, and **MySQL**.

---

## 📌 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Features](#features)
- [Contributing](#contributing)

---

## About

eStore is a modern, responsive ecommerce platform that allows users to browse products, manage a shopping cart, and place orders. It features a decoupled architecture with a ReactJS frontend and a RESTful Node.js backend connected to a MySQL database.

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js, Redux, SCSS             |
| Backend   | Node.js, Express.js               |
| Database  | MySQL                             |
| Styling   | SCSS / CSS                        |

---

## Project Structure

```
estore/
├── estore/           # Frontend – React + Redux application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.js
│
└── estoreServer/     # Backend – Node.js + Express REST API
    ├── routes/
    ├── controllers/
    ├── models/
    └── server.js
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) (v8 or above)

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/RajdeepDey010/estore.git
cd estore
```

#### 2. Install frontend dependencies

```bash
cd estore
npm install
```

#### 3. Install backend dependencies

```bash
cd ../estoreServer
npm install
```

---

### Environment Variables

Create a `.env` file inside the `estoreServer/` directory with the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=estore
JWT_SECRET=your_jwt_secret
```

---

### Database Setup

1. Open your MySQL client and create the database:

```sql
CREATE DATABASE estore;
```

2. Import the schema (if a SQL file is provided):

```bash
mysql -u your_username -p estore < schema.sql
```

---

### Running the App

#### Start the backend server

```bash
cd estoreServer
npm start
```

The server will run at `http://localhost:1010`.

#### Start the frontend

```bash
cd estore
npm start
```

The app will open at `http://localhost:3000`.

---

## Features

- 🏠 Home page with product listings
- 🔍 Product browsing and detail view
- 🛒 Shopping cart with add/remove/update functionality
- 📦 Order management
- 📱 Responsive design with SCSS

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

> Built with ❤️ by [Rajdeep Dey](https://github.com/RajdeepDey010)