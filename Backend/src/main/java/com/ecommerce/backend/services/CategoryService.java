package com.ecommerce.backend.services;

import com.ecommerce.backend.entities.Category;
import com.ecommerce.backend.repositories.CategoryRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service // Tells Spring that this class contains our core business logic
public class CategoryService {

    // Injecting the Repository so we can use its built-in database functions
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // 1. Business Logic: Fetch all categories from the database
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // 2. Business Logic: Save a brand new category to the database
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
}