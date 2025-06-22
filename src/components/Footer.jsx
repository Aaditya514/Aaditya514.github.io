// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="w-full bg-black text-white border-t border-white">
      <footer className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-rocket">
            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
            <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
          <p>Made with ❤️ by Aaditya Aanand</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;