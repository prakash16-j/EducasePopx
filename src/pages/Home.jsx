import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import BottomNav from "../component/BottomNav";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[375px] h-[100vh] bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col justify-end ">
        
        <div />

        <div className="px-6 mb-2">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome to PopX
          </h1>

          <p className="text-gray-500 text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate("/register")}
            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition mb-4"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-200 text-purple-900 py-3 rounded-md font-medium hover:bg-purple-300 transition"
          >
            Already Registered? Login
          </button>
        </div>

    <BottomNav
  page={1}
  rightPath="/login"
/>

      </div>
    </div>
  );
}
