
type Button2Props = {
   type?: "button" | "submit" | "reset"
   text: string
   onClick?: () => void;
   loading ?:boolean
}


export const Button2: React.FC<Button2Props> = ({
   type,
   text,
   onClick,
   loading

}) => {
   return  <button
      disabled={loading}
      onClick={onClick}
      type={type}
      className="w-64 justify-center flex items-center bg-black ml-9 hover:bg-gray-900 focus:ring-4 focus:outline-none  focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
   >
      {text}
   </button>
  


}