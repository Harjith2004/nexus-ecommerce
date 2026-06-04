import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={cardWrapperStyle}>
      <div style={imageContainerStyle}>
        <img
          src={
            product.imageUrl ||
            "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400"
          }
          alt={product.name}
          style={productImageStyle}
        />
      </div>
      <div style={cardInfoStyle}>
        <h4 style={productTitleStyle} title={product.name}>
          {product.name}
        </h4>
        <p style={productDescStyle}>{product.description}</p>

        <div style={ratingContainerStyle}>
          <span style={badgeStyle}>4.3 ★</span>
          <span style={reviewCountStyle}>(1,240)</span>
        </div>

        <div style={priceRowStyle}>
          <span style={currentPriceStyle}>
            ₹{new Intl.NumberFormat("en-IN").format(product.price)}
          </span>
          <span style={discountStyle}>Special Deal</span>
        </div>

        <div style={stockIndicatorStyle}>
          Only {product.stockQuantity} left!
        </div>
      </div>
    </div>
  );
};

// Professional Interactive Product Card Layout Styles
const cardWrapperStyle = {
  backgroundColor: "#fff",
  borderRadius: "4px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  cursor: "pointer",
  border: "1px solid #f0f0f0",
};
const imageContainerStyle = {
  width: "100%",
  height: "200px",
  backgroundColor: "#fcfcfc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  boxSizing: "border-box",
};
const productImageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
};
const cardInfoStyle = {
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  borderTop: "1px solid #f8f8f8",
};
const productTitleStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#212121",
  margin: "0 0 4px 0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
const productDescStyle = {
  fontSize: "12px",
  color: "#878787",
  margin: "0 0 10px 0",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  height: "32px",
  lineVertical: "16px",
};
const ratingContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "10px",
};
const badgeStyle = {
  backgroundColor: "#388e3c",
  color: "#fff",
  padding: "2px 6px",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: "600",
};
const reviewCountStyle = {
  fontSize: "12px",
  color: "#878787",
  fontWeight: "500",
};
const priceRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "8px",
};
const currentPriceStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#212121",
};
const discountStyle = { fontSize: "12px", color: "#388e3c", fontWeight: "600" };
const stockIndicatorStyle = {
  fontSize: "11px",
  fontWeight: "600",
  color: "#e53935",
  marginTop: "auto",
};

export default ProductCard;
