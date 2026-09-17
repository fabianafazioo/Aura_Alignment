import React, { useState } from "react";
import { Link } from "react-router-dom";
import productImage from "../assets-product.png";
import "./Checkout.css";

export default function Checkout() {
  const productPrice = 129;
  const taxRate = 0.06625; // NJ tax example

  // Factor 1: Payment Method (6 levels)
  const [paymentMethod, setPaymentMethod] = useState("Visa");

  // Factor 2: Shipping Method (3 levels)
  const [shippingMethod, setShippingMethod] = useState("Standard");

  // Factor 3: Delivery Type (3 levels)
  const [deliveryType, setDeliveryType] = useState("Home Delivery");

  // Shipping prices based on selected shipping method
  const shippingPrices = {
    Standard: 8.99,
    Express: 15.99,
    Overnight: 24.99,
  };

  // Store pickup has no shipping charge
  const shipping =
    deliveryType === "Store Pickup"
      ? 0
      : shippingPrices[shippingMethod];

  const tax = productPrice * taxRate;
  const total = productPrice + tax + shipping;

  // Determines whether card information should be displayed
  const isCardPayment = [
    "Visa",
    "Mastercard",
    "American Express",
    "Discover",
  ].includes(paymentMethod);

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <Link to="/" className="back-link">
          ← Back to Aura Alignment
        </Link>

        <div className="checkout-grid">
          <div className="checkout-form">
            <h1>Checkout</h1>

            <p className="checkout-subtitle">
              Complete your Aura Alignment order.
            </p>

            <h3>Contact Information</h3>
            <input
              type="email"
              placeholder="Email address"
            />

            <h3>Shipping Address</h3>
            <input
              type="text"
              placeholder="Full name"
            />

            <input
              type="text"
              placeholder="Address"
            />

            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />

            <div className="row">
              <input
                type="text"
                placeholder="City"
              />

              <input
                type="text"
                placeholder="State"
              />

              <input
                type="text"
                placeholder="ZIP code"
              />
            </div>

            {/* FACTOR 1: Payment Method */}
            <h3>Payment Method</h3>

            <div className="payment-icons">
              <span className="payment-icon visa">VISA</span>
              <span className="payment-icon mastercard">MC</span>
              <span className="payment-icon amex">AMEX</span>
              <span className="payment-icon discover">DISCOVER</span>
              <span className="payment-icon paypal">PayPal</span>
              <span className="payment-icon apple-pay">Apple Pay</span>
            </div>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="American Express">
                American Express
              </option>
              <option value="Discover">Discover</option>
              <option value="PayPal">PayPal</option>
              <option value="Apple Pay">Apple Pay</option>
            </select>

            {/* Card fields only appear when a card is selected */}
            {isCardPayment && (
              <>
                <input
                  type="text"
                  placeholder="Card number"
                />

                <div className="row">
                  <input
                    type="text"
                    placeholder="MM / YY"
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </>
            )}

            {/* FACTOR 2: Shipping Method */}
            <h3>Shipping Method</h3>

            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              disabled={deliveryType === "Store Pickup"}
            >
              <option value="Standard">
                Standard - $8.99
              </option>

              <option value="Express">
                Express - $15.99
              </option>

              <option value="Overnight">
                Overnight - $24.99
              </option>
            </select>

            {/* FACTOR 3: Delivery Type */}
            <h3>Delivery Type</h3>

            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
            >
              <option value="Home Delivery">
                Home Delivery
              </option>

              <option value="Store Pickup">
                Store Pickup
              </option>

              <option value="Pickup Point">
                Pickup Point
              </option>
            </select>

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
              <img
                src={productImage}
                alt="Aura Alignment Device"
              />

              <div>
                <h3>Aura Alignment Device</h3>

                <p>
                  Smart posture corrector + app access included
                </p>

                <span>$129.00</span>
              </div>
            </div>

            {/* Display selected DOE configuration */}
            <div className="summary-line">
              <span>Payment Method</span>
              <span>{paymentMethod}</span>
            </div>

            <div className="summary-line">
              <span>Shipping Method</span>

              <span>
                {deliveryType === "Store Pickup"
                  ? "Not Required"
                  : shippingMethod}
              </span>
            </div>

            <div className="summary-line">
              <span>Delivery Type</span>
              <span>{deliveryType}</span>
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