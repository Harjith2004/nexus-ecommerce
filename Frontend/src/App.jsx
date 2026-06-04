import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import API from "./services/api";
import ProductCard from "./components/ProductCard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loadCatalogData = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatalogData();
  }, []);

  // Filter products dynamically based on search bar input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Router>
      <div style={globalContainerStyle}>
        {/* Modern Flipkart-Inspired Navbar */}
        <nav style={navbarStyle}>
          <div style={navContentStyle}>
            <Link to="/" onClick={loadCatalogData} style={logoStyle}>
              Nexus<span style={logoSubStyle}>Plus</span>
            </Link>

            <div style={searchContainerStyle}>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={searchBarStyle}
              />
            </div>

            <div style={navLinksStyle}>
              <Link to="/" onClick={loadCatalogData} style={navLinkItemStyle}>
                Home
              </Link>
              <Link to="/admin" style={adminBtnStyle}>
                Admin Panel
              </Link>
              <div style={cartIconStyle}>
                🛒{" "}
                <span style={cartBadgeStyle}>
                  {filteredProducts.length > 0 ? 1 : 0}
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Dynamic App Pages */}
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div style={loaderStyle}>Loading Nexus Marketplace...</div>
              ) : (
                <div>
                  {/* Hero Promotional Banner */}
                  <div style={heroBannerStyle}>
                    <div style={heroOverlayStyle}>
                      <h2 style={heroTitleStyle}>Big Upgrade Sale is LIVE!</h2>
                      <p style={heroSubTitleStyle}>
                        Up to 40% Off on Top Tech & Accessories
                      </p>
                      <button style={heroBtnStyle}>Shop Now</button>
                    </div>
                  </div>

                  {/* Main Content Section */}
                  <div style={mainContentWrapperStyle}>
                    <h2 style={sectionTitleStyle}>
                      Trending Offers & Deal of the Day
                    </h2>

                    {filteredProducts.length === 0 ? (
                      <div style={emptyStateStyle}>
                        <h3>No premium items match your view</h3>
                        <p>
                          Try seeding your database or adding custom stock via
                          the Admin panel.
                        </p>
                      </div>
                    ) : (
                      <main style={productGridStyle}>
                        {filteredProducts.map((item) => (
                          <ProductCard key={item.id} product={item} />
                        ))}
                      </main>
                    )}
                  </div>
                </div>
              )
            }
          />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

// Advanced UI Styling Specifications
const globalContainerStyle = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  backgroundColor: "#f1f3f6",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
};
const navbarStyle = {
  backgroundColor: "#2874f0",
  padding: "12px 0",
  position: "sticky",
  top: 0,
  zIndex: 100,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};
const navContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
};
const logoStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "22px",
  fontWeight: "bold",
  fontStyle: "italic",
};
const logoSubStyle = {
  color: "#ffe500",
  fontSize: "14px",
  fontStyle: "normal",
  marginLeft: "2px",
  fontWeight: "600",
};
const searchContainerStyle = {
  flexGrow: 1,
  maxWidth: "560px",
  margin: "0 30px",
};
const searchBarStyle = {
  width: "100%",
  padding: "10px 16px",
  fontSize: "14px",
  border: "none",
  borderRadius: "2px",
  outline: "none",
  boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2)",
};
const navLinksStyle = { display: "flex", alignItems: "center", gap: "25px" };
const navLinkItemStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "15px",
};
const adminBtnStyle = {
  backgroundColor: "#fff",
  color: "#2874f0",
  padding: "6px 20px",
  borderRadius: "2px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};
const cartIconStyle = {
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
  position: "relative",
};
const cartBadgeStyle = {
  position: "absolute",
  top: "-8px",
  right: "-10px",
  backgroundColor: "#ff1f4b",
  color: "white",
  fontSize: "11px",
  borderRadius: "50%",
  padding: "2px 6px",
  fontWeight: "bold",
};
const heroBannerStyle = {
  background: "linear-gradient(to right, #111936, #2874f0)",
  height: "280px",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  padding: "0 10%",
};
const heroOverlayStyle = { maxWidth: "500px" };
const heroTitleStyle = {
  fontSize: "38px",
  margin: "0 0 10px 0",
  fontWeight: "800",
};
const heroSubTitleStyle = {
  fontSize: "18px",
  margin: "0 0 20px 0",
  color: "#f0f5ff",
};
const heroBtnStyle = {
  backgroundColor: "#ffe500",
  color: "#000",
  border: "none",
  padding: "12px 30px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "3px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};
const mainContentWrapperStyle = {
  maxWidth: "1200px",
  margin: "30px auto",
  padding: "0 20px",
};
const sectionTitleStyle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#212121",
  marginBottom: "20px",
};
const productGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
  gap: "16px",
};
const emptyStateStyle = {
  textAlign: "center",
  padding: "50px",
  backgroundColor: "#fff",
  borderRadius: "4px",
};
const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  fontSize: "18px",
  color: "#666",
  fontWeight: "500",
};

export default App;
