import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Mail } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-gray-900">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-6">Welcome Back</h2>
          <p className="text-center text-secondary-600 mb-6">Log in to access your account</p>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input pl-10"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-input pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-primary-600" />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Log In
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="w-full border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          {/* Social Login with Online Icons */}
          <div className="flex flex-col space-y-3">
            <button className="btn btn-outline w-full flex items-center justify-center">
              <img src="https://commons.wikimedia.org/wiki/Category:Google_SVG_logos#/media/File:Google_%22G%22_logo.svg" 
                   alt="Google Logo" 
                   className="h-5 w-5 mr-2" />
              Continue with Google
            </button>
            <button className="btn btn-outline w-full flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
                   alt="Facebook Logo" 
                   className="h-5 w-5 mr-2" />
              Continue with Facebook
            </button>
          </div>

          {/* Signup Link */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
