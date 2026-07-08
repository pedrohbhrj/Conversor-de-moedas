

interface ButtonProps {
    className?:string
    children?:React.ReactNode
    variant?:Variant
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

type Variant = 'default' | 'secondary';

const variants = {
    default:'text-[20px] md:text-[28px] font-titulo font-semibold rounded-xl bg-(--primary-color) hover:bg-(--primary-color-600) text-(--text-color) hover:bg px-13 md:px-26 py-2',
    secondary:'flex items-center justify-center text-(--text-color) bg-(--primary-color) hover:bg-(--primary-color-600) rounded-full h-[70px] w-[70px] '
}

export default function Button({className,children,variant = "default",...rest}:ButtonProps){
    return <button {...rest} className={` cursor-pointer transition-all duration-300 ease-in-out ${className} ${variants[variant]}`}>
        {children}
    </button>
}