import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


type CustomInputProps = {  
 label?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput = ({label,type, id, placeholder, handleChange, name, value}: CustomInputProps) => {

  return (
    <div className="grid w-full items-center gap-3 mb-5">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} onChange={handleChange} name={name} value={value}/>
    </div>
  )
}

export default CustomInput

