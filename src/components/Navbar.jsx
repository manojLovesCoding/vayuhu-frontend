import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rotate3D } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCoupon, setShowCoupon] = useState(true);

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Handle nav click
  const handleNavClick = (id) => {
    setShowMobileMenu(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 400);
    } else {
      scrollToSection(id);
    }
  };

  // Handle Virtual Office
  const handleVirtualOffice = () => {
    setShowMobileMenu(false);
    if (location.pathname !== "/virtual") {
      navigate("/virtual");
      setTimeout(() => scrollToSection("VirtualOfficeServices"), 400);
    } else {
      scrollToSection("VirtualOfficeServices");
    }
  };

  // Navigation Items
  const navItems = [
    { label: "Home", action: () => handleNavClick("Header") },
    { label: "About", action: () => handleNavClick("About") },
    { label: "WorkSpaces", action: () => handleNavClick("WorkSpaces") },
    { label: "Testimonials", action: () => handleNavClick("Testimonials") },
    { label: "Virtual Office", action: handleVirtualOffice },
    {
      label: (
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          >
            <Rotate3D className="w-5 h-5" />
          </motion.div>
          <span>Virtual Tour</span>
        </div>
      ),
      action: () => window.open("/vtour/index.html", "_blank"),
      isActive: true,
    },
  ];

  return (
    <>
      {/* Coupon Banner */}
      {showCoupon && (
        <div className="fixed top-0 left-0 w-full z-[60] bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 text-xs sm:text-sm md:text-base font-semibold flex items-center justify-center text-center">
          <span className="leading-snug text-[10px] xs:text-xs sm:text-sm md:text-base">
            🎉 Apply coupon <span className="underline">VC01</span> and pay just
            <span className="mx-1 line-through opacity-80">₹250</span>
            <span className="font-bold">₹100</span> for Video Conferencing!
          </span>

          <button
            onClick={() => setShowCoupon(false)}
            className="ml-3 text-white/80 hover:text-white text-lg"
          >
            ×
          </button>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          showCoupon ? "top-9 sm:top-10 md:top-11" : "top-0"
        } ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center py-3 px-4 sm:px-8 md:px-16 lg:px-24 justify-between">
          {/* Logo */}
          <div className="flex justify-start flex-1">
            <img
              src={assets.brandLogo}
              alt="Vayuhu Logo"
              className="w-28 sm:w-32 md:w-36 lg:w-40 cursor-pointer"
              onClick={() => {
                setShowMobileMenu(false);
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(
                    () =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      }),
                    400,
                  );
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, i) => (
              <motion.button
                key={i}
                onClick={item.action}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(255,127,80,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium border text-sm transition-all duration-300 ${
                  item.isActive
                    ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white border-transparent"
                    : "text-orange-400 border-orange-400 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => navigate(user ? "/dashboard" : "/auth")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md"
            >
              {user ? "My Account" : "Sign up / Login"}
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden flex-1 justify-end">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="w-6 cursor-pointer invert"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[9999] bg-black/60 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ${
          showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <img
          src={assets.cross_icon}
          alt="close"
          className="absolute top-6 right-6 w-6 cursor-pointer"
          onClick={() => setShowMobileMenu(false)}
        />

        <ul className="flex flex-col gap-6">
          {navItems.map((item, i) => (
            <motion.button
              key={i}
              onClick={item.action}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold ${
                item.isActive
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                  : "text-orange-400 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </ul>

        <motion.button
          onClick={() => {
            setShowMobileMenu(false);
            navigate(user ? "/dashboard" : "/auth");
          }}
          className="mt-8 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full font-semibold"
        >
          {user ? "My Account" : "Sign up / Login"}
        </motion.button>
      </div>
    </>
  );
};

export default Navbar;
