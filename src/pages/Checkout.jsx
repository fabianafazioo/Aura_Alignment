import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const productPrice = 129;
  const taxRate = 0.06625; // NJ tax example
  const shipping = 8.99;

  const tax = productPrice * taxRate;
  const total = productPrice + tax + shipping;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <Link to="/" className="back-link">← Back to Aura Alignment</Link>

        <div className="checkout-grid">
          <div className="checkout-form">
            <h1>Checkout</h1>
            <p className="checkout-subtitle">
              Complete your Aura Alignment order.
            </p>

            <h3>Contact Information</h3>
            <input placeholder="Email address" />

            <h3>Shipping Address</h3>
            <input placeholder="Full name" />
            <input placeholder="Address" />
            <input placeholder="Apartment, suite, etc. (optional)" />
            <div className="row">
              <input placeholder="City" />
              <input placeholder="State" />
              <input placeholder="ZIP code" />
            </div>

            <h3>Payment</h3>
            <input placeholder="Card number" />
            <div className="row">
              <input placeholder="MM / YY" />
              <input placeholder="CVV" />
            </div>

            <button className="pay-button">
              Pay ${total.toFixed(2)}
            </button>

            <p className="secure-text">
              Secure checkout · Aura Alignment App included
            </p>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="product-card">
              <img src="/src/assets-product.png" alt="Aura Alignment Device" />
              <div>
                <h3>Aura Alignment Device</h3>
                <p>Smart posture corrector + app access included</p>
                <span>$129.00</span>
              </div>
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>${productPrice.toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="app-box">
              <h4>Included with your order</h4>
              <p>
                Access to the Aura Alignment App to track posture trends,
                vibration reminders, streaks, and wellness rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}