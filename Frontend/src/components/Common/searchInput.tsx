
const InputBox = () => {
  return (
    <form className="form relative w-full">

      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 p-1"
      >
        <svg
          width={17}
          height={16}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>


      <input
        type="text"
        placeholder="Search..."
        required
        className="
          input
          w-full
          px-10
          py-3
          rounded-md
          border-2
          border-black
          focus:outline-none
          focus:black
          placeholder-black-400
          transition-all
          duration-300
          shadow-2xl
        "
      />

      <button
        type="reset"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </form>
  );
};

export default InputBox;
