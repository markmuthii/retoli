import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const inputClasses =
    "w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition";
  const labelClasses = "block text-sm font-medium text-slate-200 mb-2";
  const errorClasses = "text-red-400 text-sm mt-1";

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-slate-300">
            Join Retoli and start converting your PDFs to audiobooks
          </p>
        </div>

        <form className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className={labelClasses}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClasses}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className={labelClasses}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="johndoe123"
              className={inputClasses}
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Date of Birth and Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dob" className={labelClasses}>
                Date of Birth
              </label>
              <input type="date" id="dob" name="dob" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="gender" className={labelClasses}>
                Gender
              </label>
              <select id="gender" name="gender" className={inputClasses}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className={labelClasses}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className={labelClasses}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500 transition mt-8"
          >
            Create Account
          </button>

          <p className="text-center text-slate-400 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 hover:text-cyan-500">
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export { RegisterForm };
