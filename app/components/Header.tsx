import Image from "next/image";
import logotipo from '../../public/logo-cm.svg';
import Link from "next/link";
import Button from "./Button";
export default function Header(){
    return (
        <header className="flex items-center justify-between mx-5 mt-5 md:mx-30 md:mb-24">
            <div>
                <Image src={logotipo} alt="Logo conversor moedas"></Image>
            </div>
            <Link href={"https://www.linkedin.com/in/pedro-hbh"}><Button>Me contate</Button></Link>
        </header>
    )
}