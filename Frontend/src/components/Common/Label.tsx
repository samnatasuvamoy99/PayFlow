
type LabelProps = {
   labelName: String

}

export const Label: React.FC<LabelProps> = ({
   labelName
}) => {
   return <label className="block mb-2 text-sm font-medium text-gray-900">
      {labelName}
   </label>

}