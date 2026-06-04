package com.ecommerce.backend.config;

import com.ecommerce.backend.entities.Category;
import com.ecommerce.backend.entities.Product;
import com.ecommerce.backend.repositories.CategoryRepository;
import com.ecommerce.backend.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // If the database already has items, don't re-add them
        if (productRepository.count() > 0) {
            return;
        }

        // Create default Category
        Category generalCategory = new Category();
        generalCategory.setName("Premium Collection");
        generalCategory.setDescription("Handpicked premium products across all categories.");
        categoryRepository.save(generalCategory);

        // --- ORIGINAL ITEMS ---
        createProduct("Apple iPhone 15 Pro (128GB) - Natural Titanium", "Superfast A17 Pro chip, aerospace-grade titanium frame design, professional camera array.", 129900, 14, "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", generalCategory);
        createProduct("Sony WH-1000XM5 Wireless Headphones", "Industry-leading active noise cancellation, custom audio processors, 30 hours charge.", 29999, 22, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", generalCategory);
        createProduct("Mechanical Wireless Gaming Keyboard", "RGB backlit keys, hot-swappable linear yellow switches, long-lasting premium chassis.", 6499, 40, "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", generalCategory);
        createProduct("Premium Sports Running Sneakers", "Lightweight breathable matrix layout engineering with high shock-absorption rubber base.", 4299, 18, "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", generalCategory);
        createProduct("Minimalist Leather Men's Wristwatch", "Polished stainless silver dial with authentic dark alligator leather bands.", 8999, 12, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", generalCategory);
        createProduct("UltraHD 4K Action Sports Camera", "Waterproof up to 30m, dual stabilization lens engine, shoots flawless 60fps files.", 14500, 25, "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500", generalCategory);
        createProduct("Ergonomic Mesh Office Chair", "High back support contours, adjustable lumbar padding with 3D functional armrests.", 11999, 30, "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500", generalCategory);

        // --- NEW BATCH 1: TECH & ELECTRONICS EXTRA ---
        createProduct("MacBook Air M3 (13-inch, 16GB)", "Blazing fast Apple M3 chip, striking liquid retina display, silent fanless thermal system.", 114900, 8, "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", generalCategory);
        createProduct("iPad Air 11-inch (M2 Chip)", "Stunning Liquid Retina display, landscape 12MP front camera, support for Apple Pencil Pro.", 59900, 15, "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", generalCategory);
        createProduct("Samsung Galaxy Watch 6 LTE", "Advanced sleep coaching, continuous heart rate zones tracking, elegant rotating bezel finish.", 24999, 35, "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500", generalCategory);
        createProduct("Logitech MX Master 3S Mouse", "Ergonomic wireless mouse with ultra-quiet clicks, 8K DPI any-surface tracking.", 9495, 55, "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500", generalCategory);

        // --- NEW BATCH 2: LIFESTYLE, FASHION & APPAREL ---
        createProduct("Classic Denim Jacket - Vintage Indigo", "100% organic heavy cotton denim with classic button flaps and relaxed styling fit.", 3499, 20, "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500", generalCategory);
        createProduct("Waterproof Anti-Theft Backpack", "Built-in USB charging port, hidden security compartments, fits up to 15.6 inch laptops.", 2199, 60, "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", generalCategory);
        createProduct("Polarized Retro Sunglasses", "UVA/UVB protection with classic lightweight tortoiseshell polycarbonate frames.", 1899, 45, "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", generalCategory);
        createProduct("White Urban Streetwear Sneakers", "Premium vulcanized sole, faux-leather patchwork aesthetic for clean casual styling.", 3899, 25, "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500", generalCategory);

        // --- NEW BATCH 3: HOME, COFFEE & LIFESTYLE ACCESSORIES ---
        createProduct("Stainless Steel French Press Coffee Maker", "Double-wall insulated carafe structure, 4-level filtration mesh mesh system.", 2799, 15, "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500", generalCategory);
        createProduct("Smart Humidifier & Essential Oil Diffuser", "Ultrasonic cool mist spray with 7-color ambient LED mood ring and automatic shutoff.", 1999, 50, "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500", generalCategory);
        createProduct("HydroSleek Vacuum Insulated Bottle (1L)", "Keeps beverages ice cold for 24 hours or piping hot for 12 hours. Matte powder finish.", 1499, 80, "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500", generalCategory);
        createProduct("Dimmable Touch Sensor Bedside Lamp", "Warm aesthetic ambient lighting with wooden textured base and dual fast charging ports.", 2499, 22, "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500", generalCategory);
    }

    private void createProduct(String name, String desc, double price, int stock, String imgUrl, Category category) {
        Product p = new Product();
        p.setName(name);
        p.setDescription(desc);
        p.setPrice(BigDecimal.valueOf(price));
        p.setStockQuantity(stock);
        p.setImageUrl(imgUrl);
        p.setCategory(category);
        productRepository.save(p);
    }
}