import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      alert("Login successful!");
      // Reset form
      setFormData({
        email: "",
        password: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  const inputClasses =
    "w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition";
  const labelClasses = "block text-sm font-medium text-slate-200 mb-2";
  const errorClasses = "text-red-400 text-sm mt-1";

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 min-h-screen">
      <div className="max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Sign In
          </h1>
          <p className="text-slate-300">Welcome back to Retoli</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 space-y-6"
        >
          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={inputClasses}
            />
            {errors.email && <p className={errorClasses}>{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className={labelClasses}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className={inputClasses}
            />
            {errors.password && (
              <p className={errorClasses}>{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500 transition mt-8"
          >
            Sign In
          </button>

          <p className="text-center text-slate-400 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-cyan-400 hover:text-cyan-500">
              Register here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export { LoginForm };
