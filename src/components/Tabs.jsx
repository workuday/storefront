import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs() {
  const [active, setActive] = useState("New Arrivals");

  const tabs = [
    { label: "New Arrivals", path: "/" },
    { label: "Best Sellers", path: "/offers" },
    { label: "Deal of Week", path: "/offers" },
    { label: "Big Pack, Big Discounts", path: "/offers" },
    { label: "Top Offers", path: "/offers" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap gap-2 sm:gap-4 py-3 justify-start sm:justify-center">
            {tabs.map((tab) => (
              <Link
                key={tab.label}
                to={tab.path}
                onClick={() => setActive(tab.label)}
                className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-[10px] font-medium text-sm sm:text-base transition-all duration-200 whitespace-nowrap ${
                  active === tab.label
                    ? "bg-[#FB8700] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
