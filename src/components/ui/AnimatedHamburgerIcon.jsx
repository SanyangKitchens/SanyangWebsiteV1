// src/components/AnimatedHamburgerIcon.jsx

const AnimatedHamburgerIcon = ({ isOpen, ...props }) => {
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-foreground transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 border-2 border-transparent rounded-full justify-center items-center group"
      {...props}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 opacity-100"
            : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2 opacity-100"
            : "opacity-100"
        }`}
      />
    </button>
  );
};

export default AnimatedHamburgerIcon;