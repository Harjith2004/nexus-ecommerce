package com.ecommerce.backend.repositories;

import com.ecommerce.backend.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Marks this interface as a data access component
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // By extending JpaRepository<Category, Long>, Spring automatically provides complete CRUD operations.
    // 'Category' is the entity, and 'Long' is the type of its Primary Key (ID).
}