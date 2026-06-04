
# NexusPlus - Full-Stack E-Commerce Marketplace 🛒

A high-fidelity, production-inspired e-commerce storefront engineered to mimic modern retail platforms like Flipkart. This web application establishes an end-to-end asynchronous pipeline bridging a dynamic component-driven user interface, secure RESTful microservice business logic, and a persistent structural relational database.

---

## 🚀 Key Architectural Capabilities

- **Dynamic Flipkart-Style UI:** Immersive, clean grid-view storefront engineered using custom component rendering, CSS layout modeling, and responsive imagery.
- **Real-Time Client-Side Search Engine:** Optimized search query filtering that parses down stock items dynamically without requiring heavy database re-fetches.
- **Full Enterprise CRUD Framework:** Integrated administrative control panel complete with transactional state forms to create, read, update, and delete inventory rows.
- **Automated Database Seeding Core:** Built-in Java `CommandLineRunner` component that detects empty table states on startup and automatically initializes rich inventory datasets with verified asset hooks.
- **Custom Security Overrides:** Tailored Spring Security middleware filtering configuration designed to manage cross-origin resource sharing (CORS) across ports `5173` and `8080`.

---

## 🛠️ System Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Storefront** | React.js, Vite Engine, Axios HTTP Client, React Router DOM, Custom Inline CSS Styles |
| **Backend Microservice** | Java 17, Spring Boot, Spring Data JPA, Hibernate ORM, Spring Security |
| **Data Persistence** | PostgreSQL Relational Database Management System (RDBMS) |

---

## 📐 System Architecture Flow

The data in this application flows smoothly across a decoupled three-tier system:

```text
  [ React Client View ]   <--- (Axios HTTP Requests) --->   [ Spring Boot REST Controller ]
       (Port 5173)                                                   (Port 8080)
                                                                          │
                                                            [ Service Layer Logic / Beans ]
                                                                          │
                                                            [ Spring Data JPA Repository ]
                                                                          │
                                                                 (Hibernate Auto-SQL)
                                                                          │
                                                                          ▼
                                                             [ PostgreSQL Database ]
```
