import { Link } from "react-router-dom"

interface ButtonProps{
   label:string, 
   buttonText:string,
   to:string
}

export const BottomWarning:React.FC<ButtonProps> =
({label, buttonText, to})=> {
    return <div className=" text-solid text-md flex justify-center items-center">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1  text-green-500 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}

