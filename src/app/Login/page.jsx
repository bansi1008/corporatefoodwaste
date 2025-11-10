"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaLeaf,
} from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    // Clear alert
    if (alert.show) {
      setAlert({ show: false, type: "", message: "" });
    }
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 4) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setAlert({ show: false, type: "", message: "" });

    try {
      const res = await axios.post("/api/Login", form);

      // Show success message
      setAlert({
        show: true,
        type: "success",
        message: "Login successful! Redirecting...",
      });

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } catch (err) {
      setIsLoading(false);
      console.error("Login error:", err);

      // Handle different error types
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Invalid email or password. Please try again.";

      setAlert({
        show: true,
        type: "error",
        message: errorMessage,
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <FaLeaf />
          </div>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>
            Sign in to access your food waste dashboard
          </p>
        </div>

        {/* Alert Messages */}
        {alert.show && (
          <div
            className={`${styles.alert} ${
              alert.type === "error" ? styles.alertError : styles.alertSuccess
            }`}
          >
            {alert.type === "error" ? (
              <FaExclamationCircle className={styles.alertIcon} />
            ) : (
              <FaCheckCircle className={styles.alertIcon} />
            )}
            <span className={styles.alertMessage}>{alert.message}</span>
          </div>
        )}

        {/* Login Form */}
        <form className={styles.form} onSubmit={handleLogin}>
          {/* Email Field */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              <FaEnvelope className={styles.labelIcon} />
              Email Address
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email"
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ""
                }`}
                disabled={isLoading}
              />
              <FaEnvelope className={styles.inputIcon} />
            </div>
            {errors.email && (
              <span className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.email}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              <FaLock className={styles.labelIcon} />
              Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter your password"
                className={`${styles.input} ${
                  errors.password ? styles.inputError : ""
                }`}
                disabled={isLoading}
              />
              <FaLock className={styles.inputIcon} />
            </div>
            {errors.password && (
              <span className={styles.errorMessage}>
                <FaExclamationCircle className={styles.errorIcon} />
                {errors.password}
              </span>
            )}
          </div>

          {/* Forgot Password */}
          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotPasswordLink}>
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={styles.loginButton}
            disabled={isLoading}
            onClick={handleLogin}
          >
            <div className={styles.buttonContent}>
              {isLoading ? (
                <>
                  <div className={styles.spinner}></div>
                  Signing in...
                </>
              ) : (
                <>
                  <FaSignInAlt />
                  Sign In
                </>
              )}
            </div>
          </button>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerText}>OR</span>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Don't have an account?{" "}
            <a href="#" className={styles.signupLink}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
