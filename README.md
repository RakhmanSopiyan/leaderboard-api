# Leaderboard API – Tech Challenge #3 (Backend)

This repository contains a RESTful backend API for a mobile game leaderboard system.

## ✅ Features
- Submit player scores (JWT protected)
- Retrieve Top 10 Leaderboard
- Role-based authorization (User & Admin)
- Rate limiting on score submission
- File-based request logging
- SQL database (PostgreSQL)
- Dockerized setup (API + DB)

---

## 🛠 Tech Stack
- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT
- **Authorization**: Role-based Guards
- **Rate Limit**: NestJS Throttler
- **Logging**: Winston
- **Containerization**: Docker & Docker Compose

---

## 📦 API Endpoints

### Auth
