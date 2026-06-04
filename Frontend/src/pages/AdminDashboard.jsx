import React, { useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  // Local state properties to hold what the admin user types into the form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the entire window

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      stockQuantity: parseInt(stockQuantity),
      imageUrl,
      category: { id: 1 }, // Hardcoding to category 1 (Electronics) for now
    };

    try {
      const response = await API.post("/products", newProduct);
      if (response.status === 200) {
        setMessage(
          `🎉 Product "${response.data.name}" added successfully to PostgreSQL!`,
        );
        // Clear out the text form inputs completely
        setName("");
        setDescription("");
        setPrice("");
        setStockQuantity("");
        setImageUrl("");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add product. Is the backend server running?");
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2>Admin Control Panel</h2>
      <p style={{ color: "#666" }}>
        Add inventory items straight into your database records.
      </p>

      {message && <div style={msgBoxStyle}>{message}</div>}

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Image URL (Optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={submitBtnStyle}>
          Upload Product
        </button>
      </form>
    </div>
  );
};

// Layout Styles
const formContainerStyle = {
  maxWidth: "500px",
  margin: "40px auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};
const formStyle = { display: "flex", flexDirection: "column", gap: "15px" };
const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontFamily: "Arial",
};
const submitBtnStyle = {
  backgroundColor: "#2ecc71",
  color: "white",
  fontWeight: "bold",
  border: "none",
  padding: "12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
};
const msgBoxStyle = {
  padding: "12px",
  margin: "10px 0",
  borderRadius: "4px",
  backgroundColor: "#eef9f3",
  color: "#27ae60",
  textAlign: "center",
  fontWeight: "bold",
};

export default AdminDashboard;
