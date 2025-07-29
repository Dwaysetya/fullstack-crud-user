# Fullstack CRUD User App

A fullstack web application that allows you to manage user data using a React frontend and a Golang backend with GORM and PostgreSQL.

---

## 📁 Project Structure

```
react_golang/
├── backend/                # Golang backend API
│   ├── controllers/
│   ├── models/
│   ├── routers/
│   ├── config/
│   ├── main.go
│   └── .env                # Environment variables (ignored by Git)
├── frontend/               # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── .gitignore
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Dwaysetya/fullstack-crud-user
cd fullstack-crud-user
```

---

### 2. Setup the Backend (Golang)

```bash
cd backend
go mod tidy
go run main.go
```

#### Backend .env format

```
PORT=
DB_HOST=localhost
DB_PORT=5433
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

---

### 3. Setup the Frontend (React)

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Important Notes

- `.env` files are **excluded from Git** via `.gitignore`.
- If `.env` was already pushed by mistake, remove it from Git:

```bash
git rm --cached backend/.env
git commit -m "Remove .env files from Git tracking"
git push
```

---

## 🛠 Built With

- **Frontend:** React + Vite + Axios + React Query + Tailwind CSS
- **Backend:** Golang + GORM + PostgreSQL + Air
- **Others:** Docker (optional), .env for configuration

---

## 📃 License

This project is licensed under the MIT License.

---

## ✨ Author

Made with ❤️ by [Dwi Setyabudi](https://github.com/dwaysetya)
