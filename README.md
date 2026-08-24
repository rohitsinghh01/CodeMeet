# CodeMeet — Full-Stack Interview Platform

<h1 align="center">🚀 CodeMeet</h1>

<p align="center">
  <strong>Connect. Code. Get Hired.</strong>
</p>

<p align="center">
  A full-stack collaborative coding interview platform that brings video interviews, real-time coding, code execution, chat, and automated evaluation into one place.
</p>

---

## ✨ Overview

**CodeMeet** is a full-stack interview platform designed to simulate real-world technical interviews.

It allows interviewers and candidates to join a private **1-on-1 interview room**, communicate through video and chat, collaborate on coding problems, execute code, and receive automated results based on test cases.

The platform also includes a **Practice Problems** mode where users can solve coding questions independently without joining an interview room.

---

## 🎯 Why CodeMeet?

Traditional coding platforms and video-conferencing tools are often separate. CodeMeet combines the essential parts of a technical interview into a single platform:

* 🎥 Video communication
* 🧑‍💻 Collaborative coding
* 💬 Real-time communication
* ⚙️ Code execution
* 🎯 Automated test-case evaluation
* 📊 Interview dashboard
* 🔒 Secure interview rooms
* 🧠 Background job processing

This makes CodeMeet suitable for **mock interviews, peer interviews, technical screening, and coding practice**.

---

## ✨ Features

### 🧑‍💻 VSCode-Powered Code Editor

* VSCode-inspired coding experience
* Syntax highlighting
* Multiple programming languages
* Problem statement displayed alongside the editor
* Execute and test code directly inside the platform

### 🎥 1-on-1 Video Interview Rooms

* Create and join interview rooms
* Real-time video communication
* Mic and camera controls
* Screen sharing
* Interview recording support

### 💬 Real-Time Chat

* Send messages during interviews
* Real-time message delivery
* Useful for sharing hints, explanations, and interview communication

### ⚙️ Code Execution

* Execute submitted code against predefined test cases
* Isolated execution environment
* Automatic success/failure evaluation
* Execution results displayed directly in the coding interface

### 🎯 Automatic Evaluation

After code execution, CodeMeet evaluates the submission against test cases.

**Successful submission:**

* 🎉 Success notification
* 🎊 Confetti animation

**Failed submission:**

* ❌ Failure notification
* Test-case results displayed to the user

### 🧩 Practice Problems

Practice coding independently without joining an interview room.

Users can:

* Browse coding problems
* Select a problem
* Write and execute code
* Test solutions
* Improve their problem-solving skills

### 🔒 Room Locking

Interview rooms are designed for exactly **two participants**.

Once two users have joined:

> 🔐 The room is automatically locked.

This prevents unwanted participants from entering an ongoing interview.

### 🧭 Dashboard

The dashboard provides useful interview statistics and activity information, including:

* Total interviews
* Completed interviews
* Upcoming interviews
* Coding activity
* Interview history

---

## 🛠️ Tech Stack

### Frontend

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| React.js       | Frontend UI                 |
| Vite           | Development & build tooling |
| Tailwind CSS   | Styling                     |
| TanStack Query | Data fetching & caching     |
| Clerk          | Authentication              |
| Stream         | Video & communication       |
| Monaco Editor  | Code editor                 |

### Backend

| Technology | Purpose              |
| ---------- | -------------------- |
| Node.js    | Runtime              |
| Express.js | REST API             |
| MongoDB    | Database             |
| Clerk      | Authentication       |
| Inngest    | Background jobs      |
| Stream     | Video infrastructure |

---

## 📁 Project Structure

```text
CodeMeet/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env
│
├── package.json
└── README.md
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **backend** directory.

### Backend — `/backend/.env`

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

Create another `.env` file inside the **frontend** directory.

### Frontend — `/frontend/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```
---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/rohitsinghh01/CodeMeet.git

cd CodeMeet
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Configure Backend Environment

Create:

```text
backend/.env
```

and add the required environment variables.

---

## 4. Start the Backend

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

---

## 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

## 6. Configure Frontend Environment

Create:

```text
frontend/.env
```

and add the required frontend environment variables.

---

## 7. Start the Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```
