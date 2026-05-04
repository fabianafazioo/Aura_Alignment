import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  ShoppingBag,
  Star,
  Smartphone,
  Bluetooth,
  Activity,
  Award,
  Camera,
  MessageCircle,
  Music2,
  Package,
  ShieldCheck,
  HeartHandshake,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Download,
  Zap,
  Trash2,
} from "lucide-react";

import productImage from "./assets-product.png";
import personasImage from "./assets-personas.png";
import heroBg from "./assets-hero-bg.png";
import Checkout from "./pages/Checkout";
import "./styles.css";

const PRODUCT = {
  id: 1,
  name: "Aura Alignment Smart Corrector",
  price: 129,
  image: productImage,
  description: "Device + App included",
};

function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === PRODUCT.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === PRODUCT.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...PRODUCT, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const reviews = [
    {
      name: "Sofia, The Academic",
      role: "Student, 24",
      text: "Aura Alignment helped me catch my study posture before my shoulders started hurting. The app streaks made posture feel like a daily goal, not a chore.",
    },
    {
      name: "Marcus, The Founder",
      role: "Founder, 32",
      text: "I spend hours in meetings and at my desk. The gentle vibration reminders helped me look more confident on calls and stay aware of my screen slump.",
    },
    {
      name: "Elena, The Athlete",
      role: "Athlete, 29",
      text: "The daily posture trends are my favorite part. I can see when I lose alignment after workouts and use the rewards to stay consistent.",
    },
  ];

  return (
    <div className="site">
      <nav className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark">A</span>Aura Alignment
        </a>

        <div className="nav-links">
          <a href="#product">Shop</a>
          <a href="#app">App</a>
          <a href="#reviews">Reviews</a>
          <a href="#creators">Creators</a>
          <a href="#support">Support</a>
        </div>

        <button className="cart-button" onClick={() => setCartOpen(true)}>
          <ShoppingBag size={18} />
          Cart
          {cartCount > 0 && <span>{cartCount}</span>}
        </button>
      </nav>

      <header
        id="top"
        className="hero hero-background"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3, 20, 43, 0.9), rgba(3, 20, 43, 0.45)), url(${heroBg})`,
        }}
      >
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} /> Smart posture. Premium wellness.
          </p>

          <h1>Elevate Your Presence</h1>

          <p className="hero-text">
            Aura Alignment is a smart posture corrector and app experience
            designed to help you stand taller, feel confident, and build a
            healthier lifestyle one gentle reminder at a time.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#product">
              Shop Aura <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href="#app">
              Download App
            </a>
          </div>

          <div className="trust-row">
            <span>
              <ShieldCheck size={18} /> Trusted wellness technology
            </span>
            <span>
              <Star size={18} /> 4.9 customer rating
            </span>
          </div>
        </div>

        <div className="hero-card">
          <div className="glow-circle"></div>
          <img src={productImage} alt="Aura Alignment smart posture device" />
          <div className="floating-card">
            <Zap size={18} /> Gentle vibration cues
          </div>
        </div>
      </header>

      <section className="campaigns">
        <div>
          <h2>Posture = Glow Up</h2>
          <p>Confidence starts with how you carry yourself.</p>
        </div>

        <div>
          <h2>Your Posture Today, Your Future Tomorrow</h2>
          <p>
            Small daily alignment habits can support long-term body awareness.
          </p>
        </div>
      </section>

      <section id="product" className="product-section">
        <div className="section-heading">
          <p className="eyebrow">Shop the device</p>
          <h2>Smart posture correction with the app included.</h2>
          <p>
            One wearable device. One lifestyle app. One simple way to understand
            your posture throughout the day.
          </p>
        </div>

        <div className="product-grid">
          <div className="product-gallery">
            <img src={productImage} alt="Aura Alignment device front view" />
          </div>

          <div className="product-info">
            <p className="badge">Aura Alignment Device + App</p>
            <h3>{PRODUCT.name}</h3>
            <p className="price">${PRODUCT.price}</p>

            <p className="included">
              Includes the wearable device, Bluetooth app access, posture
              analytics, streaks, rewards, and guided setup.
            </p>

            <ul className="check-list">
              <li>
                <CheckCircle2 /> Gentle vibration reminders when posture drops
              </li>
              <li>
                <CheckCircle2 /> Tracks daily posture trends and weak moments
              </li>
              <li>
                <CheckCircle2 /> App streaks, rewards, and posture goals
              </li>
              <li>
                <CheckCircle2 /> Designed for students, professionals, and active
                lifestyles
              </li>
            </ul>

            <div className="buy-actions">
              <button className="primary-btn" onClick={addToCart}>
                Add to Cart
              </button>

              <Link className="secondary-btn" to="/checkout">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="personas">
        <div className="personas-copy">
          <p className="eyebrow">
            <Users size={16} /> Built for real lifestyles
          </p>
          <h2>Accessible for every version of your day.</h2>
          <p>
            Whether you are studying, building a company, training, or sitting
            at a desk, Aura Alignment helps you stay aware of your posture
            without interrupting your routine.
          </p>
        </div>

        <img src={personasImage} alt="Aura Alignment customer personas" />
      </section>

      <section id="app" className="app-section">
        <div className="phone-card">
          <div className="app-icon">A</div>
          <h3>Aura App</h3>
          <p>Posture intelligence in your pocket.</p>

          <div className="app-stat">
            <span>82%</span>
            <small>Aligned today</small>
          </div>

          <div className="app-stat">
            <span>14</span>
            <small>Vibration reminders</small>
          </div>

          <div className="app-stat">
            <span>7 day</span>
            <small>Glow streak</small>
          </div>
        </div>

        <div className="app-copy">
          <p className="eyebrow">
            <Smartphone size={16} /> What makes us different
          </p>

          <h2>The app is the lifestyle.</h2>

          <p>
            Aura Alignment does more than remind you to sit straight. The app
            shows your posture trend during the day, how many vibration cues
            your device used, when your posture drops, and how consistent you
            are becoming.
          </p>

          <div className="feature-grid">
            <div>
              <Activity />
              <h4>Daily posture trends</h4>
              <p>See when your posture is strongest and weakest.</p>
            </div>

            <div>
              <Bluetooth />
              <h4>Bluetooth device sync</h4>
              <p>Connect your wearable and track reminders in real time.</p>
            </div>

            <div>
              <Award />
              <h4>Streaks & rewards</h4>
              <p>Build motivation with goals, badges, and progress.</p>
            </div>
          </div>

          <div className="download-buttons">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} /> Download on App Store
            </a>

            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} /> Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-section">
        <div className="section-heading">
          <p className="eyebrow">Customer comments</p>
          <h2>Loved by students, founders, and athletes.</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars">★★★★★</div>
              <p>“{review.text}”</p>
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="social-proof">
        <h2>Trusted company. Social-first community.</h2>
        <p>
          Follow Aura Alignment across our platforms for posture tips, creator
          campaigns, app challenges, and product updates.
        </p>

        <div className="social-icons">
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            <Music2 /> TikTok
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Camera /> Instagram
          </a>
          <a href="https://www.amazon.com/" target="_blank" rel="noreferrer">
            <Package /> Amazon
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <MessageCircle /> Facebook
          </a>
        </div>
      </section>

      <section id="creators" className="creator-section">
        <div>
          <p className="eyebrow">
            <HeartHandshake size={16} /> Creator program
          </p>
          <h2>Become an Aura influencer.</h2>
          <p>
            Apply to join our affiliate program and receive a creator link to
            share Aura Alignment with your community.
          </p>
        </div>

        <a
          className="primary-btn"
          href="mailto:support@auraaligment.com?subject=Aura%20Alignment%20Creator%20Application"
        >
          Apply for Affiliate Link
        </a>
      </section>

      <footer id="support" className="footer">
        <div>
          <h3>Aura Alignment</h3>
          <p>Elevate Your Presence</p>
          <p>www.auraaligment.com</p>
          <a href="mailto:support@auraaligment.com">
            <Mail size={16} /> support@auraaligment.com
          </a>
        </div>

        <div className="footer-links">
          <a href="#product">Shop</a>
          <a href="#app">App Download</a>
          <a href="#creators">Affiliate Application</a>
          <a href="#support">Support</a>
        </div>
      </footer>

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setCartOpen(false)}>
              ×
            </button>

            <h3>Your Cart</h3>

            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-details">
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                      <span>${item.price}</span>

                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="trash-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>

                  <div>
                    <span>Shipping</span>
                    <strong>Calculated at checkout</strong>
                  </div>

                  <div className="cart-total">
                    <span>Total</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>
                </div>

                <Link className="primary-btn full" to="/checkout">
                  Proceed to Checkout
                </Link>
              </>
            )}

            <p className="secure-note">
              This checkout is a class prototype that simulates a Shopify-style
              purchase flow.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout product={PRODUCT} />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);