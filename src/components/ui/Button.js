// import PropTypes from "prop-types";

// export function Button({ variant = "primary", className = "", children, ...props }) {
//   const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-300";
//   const variants = {
//     primary: "bg-primary text-white hover:bg-primary-dark",
//     secondary: "bg-white text-black hover:bg-gray-100",
//     outline: "border border-white text-white hover:bg-white hover:text-black",
//   };

//   return (
//     <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// }

// Button.propTypes = {
//   variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`w-full max-w-[600px] px-[250px] py-[120px] text-4xl font-semibold tracking-wide border-none rounded-none transition-colors duration-300 font-verdana bg-[#9cc0cf] text-white hover:bg-[#374151] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}



