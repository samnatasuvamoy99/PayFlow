type InputFiled = {
  placeholder?: string;
  id?: string;
  type?: string;
  color?: "green" | "gray";
};

export const Input: React.FC<InputFiled> = ({
  placeholder,
  id,
  type = "text",
  color = "gray",
}) => {
  const colorClasses =
    color === "green"
      ? `
        text-black-500
        focus:border-green-500
        focus:ring-green-500
        hover:border-green-500
      `
      : `
        text-gray-900
        border-gray-300
        focus:border-black-500
        focus:ring-black
      `;

  return (
    <input
      placeholder={type === "password" ? "••••••••" : placeholder}
      id={id}
      type={type}
      className={`bg-gray-50 border
        ${colorClasses}
        sm:text-sm rounded-lg block w-full p-2.5
        focus:outline-none focus:ring-1`}
    />
  );
};
