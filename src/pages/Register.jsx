import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNav from "../component/BottomNav";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAccount = () => {
    const { name, phone, email, password, company } = form;

    if (!name || !phone || !email || !password || !company) {
      toast.error("Please fill all required fields");
      return;
    }

    localStorage.setItem("popxUser", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer />

      {/* Mobile screen */}
      <div className="w-[375px] h-[100vh] bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col justify-between">

        {/* FORM CONTENT */}
        <div className="px-6 pt-8 flex-1 overflow-y-auto scrollbar-hide">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Create your <br /> PopX account
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm text-purple-600 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm text-purple-600 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-purple-600 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm text-purple-600 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Company Name */}
          <div className="mb-6">
            <label className="block text-sm text-purple-600 mb-1">
              Company name
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Agency */}
          <div className="mb-8">
            <p className="text-sm text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    value={v}
                    checked={form.agency === v}
                    onChange={handleChange}
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>

          {/* Create Account Button */}
          <button
            onClick={handleCreateAccount}
            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </div>

        {/* BOTTOM NAV */}
       <BottomNav
  page={3}
  leftPath="/login"
  onRightClick={handleCreateAccount}
/>

      </div>
    </div>
  );
}
