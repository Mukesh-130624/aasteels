import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t-2 border-yellow-600">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2003-2025 A.A. Steels & Trading Co. All rights reserved.</p>
        <p className="mt-2 text-sm text-yellow-500">
          www.aasteelstradingco.com
        </p>
      </div>
    </footer>
  );
};

export default Footer
