import React from "react";

const AnimatedHamburgerIcon = ({ isOpen }) => {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
      {/* Top line: Rotates 45deg and moves down to center when open */}
      <span
        className={`block w-full h-0.5 bg-foreground rounded-full transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      
      {/* Middle line: Fades out when open */}
      <span
        className={`block w-full h-0.5 bg-foreground rounded-full transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      
      {/* Bottom line: Rotates -45deg and moves up to center when open */}
      <span
        className={`block w-full h-0.5 bg-foreground rounded-full transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  );
};

export default AnimatedHamburgerIcon;