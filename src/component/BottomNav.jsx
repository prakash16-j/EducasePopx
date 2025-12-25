import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNav({
  leftPath,
  rightPath,
  page,
  total = 4,
  onRightClick,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center gap-6 py-4 text-gray-500 text-sm">
      
      {/* HOME */}
      <HomeIcon
        className="cursor-pointer hover:text-gray-800"
        size={18}
        onClick={() => navigate("/")}
      />

      {/* LEFT */}
      <ChevronLeft
        className={`cursor-pointer hover:text-gray-800 ${
          !leftPath ? "text-gray-300 cursor-not-allowed" : ""
        }`}
        size={18}
        onClick={() => leftPath && navigate(leftPath)}
      />

      {/* PAGE INFO */}
      <span className="font-medium text-gray-700">
        {page} of {total}
      </span>

      {/* RIGHT */}
      <ChevronRight
        className={`cursor-pointer hover:text-gray-800 ${
          !rightPath && !onRightClick
            ? "text-gray-300 cursor-not-allowed"
            : ""
        }`}
        size={18}
        onClick={() => {
          if (onRightClick) onRightClick();
          else if (rightPath) navigate(rightPath);
        }}
      />
    </div>
  );
}
