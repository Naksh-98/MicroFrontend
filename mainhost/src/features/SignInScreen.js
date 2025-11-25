import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../services/loginApi"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const SignInScreen = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [Login, { data, isLoading }] = useLoginMutation()
    const onSubmit = (formData) => {
        // event.preventDefault();
        Login(formData)
    };
    useEffect(() => {
        if (data) {
            const { accessToken, refreshToken, username, email, firstName, lastName, image } = data
            localStorage.setItem("auth", JSON.stringify({
                accessToken,
                refreshToken,
                profile: { username, email, firstName, lastName, image }
            }))
            navigate("/products")
        }
    }, [data])

    const handleGoogleLogin = () => {
    };

    const handleFacebookLogin = () => {
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Sign In</h1>
                <p className="auth-subtitle">Welcome back! Please enter your details.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                    <label className="auth-label">
                        Email Address
                        <input
                            type="name"
                            name="name"
                            {...register("username")}
                            placeholder="you@example.com"
                            className="auth-input"
                            required
                        />
                    </label>

                    <label className="auth-label">
                        Password
                        <input
                            type="password"
                            name="password"
                            {...register("password")}
                            placeholder="••••••••"
                            required
                            className="auth-input"
                        />
                    </label>

                    <div className="auth-actions">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="/" className="forgot-password">Forgot password?</a>
                    </div>

                    <button type="submit" className="primary-btn" disabled={isLoading}>
                        Sign In
                    </button>
                </form>

                <div className="divider">
                    <span>or continue with</span>
                </div>

                <div className="social-buttons">
                    <button type="button" onClick={handleGoogleLogin} className="social-btn google">
                        <span role="img" aria-label="Google">🔵</span>
                        Google
                    </button>

                    <button type="button" onClick={handleFacebookLogin} className="social-btn facebook">
                        <span role="img" aria-label="Facebook">🔷</span>
                        Facebook
                    </button>
                </div>

                <p className="auth-footer">
                    Don’t have an account? <a href="/">Create one</a>
                </p>
            </div>
        </div>
    );
};

export default SignInScreen;