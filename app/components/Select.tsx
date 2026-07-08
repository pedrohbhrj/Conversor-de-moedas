"use client"
import { ComponentProps, ComponentPropsWithoutRef } from "react"

interface SelectProps extends ComponentProps<'select'> {
    children?:React.ReactNode
    className?:string
    reverse?:boolean

}



const moedas = ["BRL - Real Brasileiro","EUR - Euro","USD - Dolár americano"]

const moedasReversa = [...moedas].reverse();



export default function Select({value,reverse,children,className,...rest}:SelectProps){
    return (
        <select value={value}  className="px-4 text-(--placeholder-color) cursor-pointer bg-transparent border-none outline-none" {...rest}>
            {!reverse ? moedas.map((item) => {
                return <option key={item} value={item.substring(0,3)}>{item}</option>
                }): moedasReversa.map((item) => {
                return <option key={item} value={item.substring(0,3)}>{item}</option>
                })}
        </select>
    )
}