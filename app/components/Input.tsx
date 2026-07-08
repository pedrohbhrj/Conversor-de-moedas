import { ComponentPropsWithoutRef } from "react"


interface InputProps extends ComponentPropsWithoutRef<'input'> {
    className?:string
}



export default function Input({className,...rest}:InputProps){
    return <input {...rest} className={`${rest.type === "number" ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none":""} placeholder:text-(--placeholder-color) py-3 md:px-6.25 border-none outline-none transition-all duration-300 ease-in-out ${className}}`}></input>
}