import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../component/BottomNav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const storedUser = localStorage.getItem("popxUser");
    if (!storedUser) {
      toast.error("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email !== email || user.password !== password) {
      toast.error("Invalid email or password OR create your account");
      return;
    }

    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer />

      {/* Mobile screen */}
      <div className="w-[375px] h-[100vh] bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col justify-between">
        
        {/* MAIN CONTENT */}
        <div className="px-6 pt-10">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Signin to your <br /> PopX account
          </h1>

          <p className="text-gray-500 text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-purple-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-purple-600"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm text-purple-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-purple-600"
            />
          </div>

          {/* Login Button */}
          <button
            disabled={!email || !password}
            onClick={handleLogin}
            className={`w-full py-3 rounded-md font-medium ${
              email && password
                ? "bg-purple-600 text-white"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </div>

        {/* BOTTOM NAVIGATION */}
        <BottomNav
          page={2}
          leftPath="/"
          rightPath="/register"
        />
      </div>
    </div>
  );
}
