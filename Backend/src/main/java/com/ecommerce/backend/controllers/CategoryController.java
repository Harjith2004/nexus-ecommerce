package com.ecommerce.backend.controllers;

import com.ecommerce.backend.entities.Category;
import com.ecommerce.backend.services.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Tells Spring that this class handles web requests and returns JSON data
@RequestMapping("/api/v1/categories") // This sets the base URL path for this controller
@CrossOrigin(origins = "*") // Allows our future React app to talk to this backend without security blocks
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // 1. Endpoint: GET http://localhost:8080/api/v1/categories
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    // 2. Endpoint: POST http://localhost:8080/api/v1/categories
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category savedCategory = categoryService.createCategory(category);
        return ResponseEntity.ok(savedCategory);
    }
}