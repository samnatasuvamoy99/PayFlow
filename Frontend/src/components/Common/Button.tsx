import React from "react";

type ButtonProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label = "Send Money",
  href = "#",
  onClick,
}) => {
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      {/* Glow background */}
      <div
        className="absolute inset-0 duration-1000 opacity-60 transition-all
        bg-gradient-to-r from-black-500 via-gary-500 to-black-400
        rounded-xl blur-lg filter
        group-hover:opacity-40 group-hover:duration-200"
      />

     
      <a
        role="button"
        href={href}
        onClick={onClick}
        title="payment"
        className="group mr-2 mt-3 relative inline-flex items-center justify-center
        text-base rounded-xl bg-gray-900 p-2
        font-semibold text-white transition-all duration-600
        hover:bg-gray-800 hover:shadow-lg
        hover:-translate-y-0.5 hover:shadow-gray-900/30"
      >
        {label}

        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height={10}
          width={10}
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="transition opacity-0 group-hover:opacity-100"
          />
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          />
        </svg>
      </a>
    </div>
  );
};
