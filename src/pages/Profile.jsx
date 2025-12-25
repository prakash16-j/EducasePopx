import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCamera } from "react-icons/io";
import BottomNav from "../component/BottomNav";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("popxUser");
    if (!storedUser) {
      navigate("/register");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[375px] h-[100vh] bg-white border border-gray-200 flex flex-col justify-between">
        
        {/* HEADER */}
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h1 className="text-sm font-semibold text-gray-700">
            Account Settings
          </h1>
        </div>

        {/* PROFILE CARD */}
        <div className="px-6 pt-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex gap-4 mb-3">
              
              {/* Avatar */}
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
              <IoMdCamera className="" />
                </span>
              </div>

              {/* Name & Email */}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
              Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
              Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>

          {/* Dashed Divider */}
          <div className="border-t border-dashed border-gray-300 my-6" />
        </div>

        {/* EMPTY SPACE (as in design) */}
        <div className="flex-1" />

        {/* BOTTOM DASHED LINE */}
        <div className="border-t border-dashed border-gray-300 mx-6" />

        {/* BOTTOM NAV */}
        <BottomNav page={4} leftPath="/register" />
      </div>
    </div>
  );
}
