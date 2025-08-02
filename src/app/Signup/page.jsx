'use client';
// components/SignUp.jsx
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate successful sign up
    setSuccess(true);
    setErrors({});

    // Reset form after 3 seconds
    setTimeout(() => {
      setSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
      });
    }, 3000);
  };

  return (
    <div
      className="min-h-screen  flex items-center justify-center p-4 md:p-6 relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      {/* Sign Up Card with transparent background and hover effects */}
      <div className="glass-card bg-white/10 backdrop-blur-xl border mt-15 border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8 w-full max-w-md shadow-xl 
                      transition-all duration-500 ease-in-out
                      hover:bg-white/20 hover:backdrop-blur-2xl hover:shadow-2xl hover:border-white/40
                      group relative overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="600">



        <div className="relative z-10">
          {/* Logo and Company Name */}
          <div className="text-center mb-6 md:mb-8">

            <Image
              src={"/images/logo-nav.svg"}
              alt="image"
              width={20}
              height={20}
              className="object-contain w-[100px] m-auto mb-5"
              unoptimized // Remove this if you want Next.js to optimize the images
            />
            <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
              group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-500">
                Constant Growth
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-500">
              Join us and start your growth journey
            </p>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="fullName" className="block text-xs md:text-sm font-medium text-gray-300 group-hover:text-white mb-1 md:mb-2 transition-colors duration-500">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={`input-field w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border ${errors.fullName ? 'border-red-500' : 'border-gray-500 group-hover:border-white/60'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/5 text-white placeholder-gray-400`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs md:text-sm text-red-400">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 group-hover:text-white mb-1 md:mb-2 transition-colors duration-500">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`input-field w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border ${errors.email ? 'border-red-500' : 'border-gray-500 group-hover:border-white/60'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/5 text-white placeholder-gray-400`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-xs md:text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-xs md:text-sm font-medium text-gray-300 group-hover:text-white mb-1 md:mb-2 transition-colors duration-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`input-field w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border ${errors.password ? 'border-red-500' : 'border-gray-500 group-hover:border-white/60'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/5 text-white placeholder-gray-400`}
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-xs md:text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs md:text-sm font-medium text-gray-300 group-hover:text-white mb-1 md:mb-2 transition-colors duration-500">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`input-field w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-500 group-hover:border-white/60'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/5 text-white placeholder-gray-400`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs md:text-sm text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 group-hover:border-white rounded mt-1 bg-white/10"
              />
              <label htmlFor="terms" className="ml-2 block text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors duration-500">
                I agree to the <a href="#" className="text-blue-400 hover:text-blue-300 underline">Terms</a> and <a href="#" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs md:text-sm text-red-400">{errors.terms}</p>
            )}

            <button
              type="submit"
              className="signup-btn w-full text-white text-sm md:text-base font-semibold py-2 md:py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
                        transition-all hover:translate-y-[-2px] hover:shadow-lg hover:from-blue-400 hover:to-purple-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0f3460]"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
              Already have an account?
              <Link href="/Signin" className="text-blue-400 hover:text-blue-300 font-medium underline ml-1">
                Sign in
              </Link>
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-green-900/30 backdrop-blur-md border border-green-500 text-green-200 rounded-lg animate-fadeIn">
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xs md:text-sm font-medium">Welcome! Account created successfully.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;