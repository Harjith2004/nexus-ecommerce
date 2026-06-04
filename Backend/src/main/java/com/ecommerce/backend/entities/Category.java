package com.ecommerce.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data // Lombok automatically generates getters, setters, and toString methods
@Entity // Tells Spring Data JPA that this class maps to a database table
@Table(name = "categories") // Maps this entity to the "categories" table in PostgreSQL
public class Category {

    @Id // Specifies that this field is the Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Tells Java that the DB auto-increments this ID (SERIAL)
    private Long id;

    @Column(unique = true, nullable = false, length = 100)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;
}