package com.ecommerce.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private BigDecimal price; // BigDecimal is used for money to prevent rounding decimals bugs

    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity;

    @Column(name = "image_url")
    private String imageUrl;

    // Establishing a Many-to-One relationship: Many products can belong to One category
    @ManyToOne
    @JoinColumn(name = "category_id") // Maps to the foreign key column in our DB
    private Category category;
}