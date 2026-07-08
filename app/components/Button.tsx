

interface ButtonProps {
    className?:string
    children?:React.ReactNode
    variant?:Variant
}

type Variant = 'default' | 'secondary';

const variants = {
    default:'text-[20px] md:text-[28px] font-titulo font-semibold bg-(--primary-color) hover:bg-(--primary-color-600) text-(--text-color) hover:bg px-13 md:px-26 py-2',
    secondary:''
}

export default function Button({className,children,variant = "default",...rest}:ButtonProps){
    return <button className={` cursor-pointer rounded-xl transition-all duration-300 ease-in-out ${className} ${variants[variant]}`}>
        {children}
    </button>
}