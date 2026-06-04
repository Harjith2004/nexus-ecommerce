# NexusPlus - Full-Stack E-Commerce Marketplace 🛒

A production-ready, high-fidelity e-commerce storefront inspired by modern retail platforms like Flipkart. This application architecture establishes an asynchronous pipeline bridging user frontends, business microservices, and persistent structural databases.

## 🚀 Key Architectural Features
- **Dynamic Flipkart-Style Storefront:** Immersive, clean grid view UI showing live product statuses, custom typography, and responsive image scaling.
- **Instant Search Processing:** Client-side query filter processing that filters out targeted stock items instantly in real-time.
- **Enterprise CRUD Capabilities:** Dedicated administrative engine complete with data validation forms to push items into live tables seamlessly.
- **Automated Database Seeding:** Built-in Java `CommandLineRunner` script that auto-populates tables on boot using clean asset links.

## 🛠️ Tech Stack Architecture
- **Frontend Layer:** React.js, Vite engine, Axios client, React Router DOM, Custom Component Styling.
- **Backend Microservice:** Java 17, Spring Boot, Spring Data JPA, Hibernate, Spring Security.
- **Database Layer:** PostgreSQL Relational Database Management System.

## 📦 System Installation & Launch Guide

### 1. Database Setup
Ensure PostgreSQL is active on your machine. Create a clean database matching the backend settings:
```sql
CREATE DATABASE ecommerce_db;
