"use client";

import { LucideArrowLeftRight } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";


export type data = {
    BRL:number,
    EUR:number,
    USD:number
}


const currencyValuesFromApi = async ():Promise<data | undefined> => {

   
    
    try{

        const url = process.env.NEXT_PUBLIC_API_URL;
        if(!url) return;

        const buscandoDados = await fetch(url);

        if(buscandoDados.ok){
                const json = await buscandoDados.json();
                return json.data;
        }

        throw new Error("Erro ao devolver os dados.");
    }catch(err){
        console.log("Deu erro na api -> " ,err);
    }
}

type Origem = {
    campo:null | "USD" | "BRL" | "EUR",
    valor?:string | number
}

export default function ConversorDeMoedas(){


    const [currencyValues,setCurrencyValues] = useState<data | undefined>();
    const [converting,setConverting] = useState<string>("");

    const [currencyAtualPara,setCurrencyAtualPara] = useState<string>("USD");
    const [currencyAtualDe,setCurrencyAtualDe] = useState<string>("BRL");

    const [origem,setOrigem] = useState<string>("");
    

    const [de,setDe] = useState<string>("");
    const [para,setPara] = useState<string>("");

    

    const formataMoedaFactory = (currency:string) => {
        if(currencyAtualDe === "BRL"){
            return new Intl.NumberFormat('pt-BR', {
                style:'currency',
                currency:currency
            });
        }
        if(currencyAtualDe === "EUR"){
            return new Intl.NumberFormat('de-DE', {
                style:'currency',
                currency:currency
            });
        }
        if(currencyAtualDe === "USD"){
            return new Intl.NumberFormat('en-US', {
                style:'currency',
                currency:currency
            });
        }
    }

    useEffect(() => {
        
        const getData = async () => {
            const resultado = await currencyValuesFromApi();
            if(resultado){
                setCurrencyValues(resultado);
                const valueConverted = (resultado.USD / resultado.BRL).toFixed(2);
                setConverting(valueConverted);
            }
        }
        getData();

    
    },[]);

    useEffect(() => {

        if(currencyValues === undefined || origem === "para" || origem === "trocando"){
            return;
        }else{
            let conta:number = 0;
            if(currencyAtualDe === "BRL" && currencyAtualPara === "USD"){
                conta = Number(de) / currencyValues.BRL;
                setPara(conta.toFixed(2));
            }
            if(currencyAtualDe === "BRL" && currencyAtualPara === "EUR"){
                conta = (currencyValues.EUR / currencyValues.BRL) * Number(de);
                setPara(conta.toFixed(2));
            }

            if(currencyAtualDe === "USD" && currencyAtualPara === "BRL"){
                conta = (currencyValues.USD / currencyValues.BRL) * Number(de);
                setPara(conta.toFixed(2));
            }
            if(currencyAtualDe === "USD" && currencyAtualPara === "EUR"){
                conta = (currencyValues.USD / currencyValues.EUR) * Number(de);
                setPara(conta.toFixed(2));

            }
            if(currencyAtualDe === "EUR" && currencyAtualPara === "BRL"){
                conta = (currencyValues.BRL / currencyValues.EUR) * Number(de);
                setPara(conta.toFixed(2));
            }
            if(currencyAtualDe === "EUR" && currencyAtualPara === "USD"){
                conta = (currencyValues.USD / currencyValues.EUR) * Number(de);
                setPara(conta.toFixed(2));
            }
            
            if(currencyAtualDe === currencyAtualPara){
                setPara(de);
            }


        }
    },[de,currencyAtualDe,currencyAtualPara])

   
    useEffect(() => {


        if(currencyValues === undefined || origem === "de" || origem === "trocando"){
            return;
        }else{
            let conta:number = 0;
            if(currencyAtualPara === "BRL" && currencyAtualDe === "USD"){
                conta = Number(para) / currencyValues.BRL;
                setDe(conta.toFixed(2));
            }
            if(currencyAtualPara === "BRL" && currencyAtualDe === "EUR"){
                conta = (currencyValues.EUR / currencyValues.BRL) * Number(para);
                setDe(conta.toFixed(2));
            }

            if(currencyAtualPara === "USD" && currencyAtualDe === "BRL"){
                conta = (currencyValues.BRL * Number(para));
                setDe(conta.toFixed(2));
            }
            if(currencyAtualPara === "USD" && currencyAtualDe === "EUR"){
                conta = currencyValues.EUR * Number(para);
                setDe(conta.toFixed(2));

            }
            if(currencyAtualPara === "EUR" && currencyAtualDe === "BRL"){
                conta = (currencyValues.BRL / currencyValues.EUR) * Number(para);
                setDe(conta.toFixed(2));
            }
            if(currencyAtualPara === "EUR" && currencyAtualDe === "USD"){
                conta = (currencyValues.EUR / currencyValues.USD) * Number(para);
                setDe(conta.toFixed(2));
            }
            
            if(currencyAtualDe === currencyAtualPara){
                setDe(para);
            }
        }
    },[para])

    const handleChange = (value:string) => {
        setCurrencyAtualDe(value);
    }
    const handleChangeReverse = (value:string) => {
        setCurrencyAtualPara(value);
    }

    const handleDe = (e:string) => {
        setDe(e);
        setOrigem("de");
    }

    const handlePara = (e:string) => {
        setPara(e);
        setOrigem("para");
    }
    

    const handleClick = () => {

        setOrigem("trocando");

        let temporaryDe = de;
        let temporaryPara = para;

    
        let currencyAtualDeTemp = currencyAtualDe
        let currencyAtualParaTemp = currencyAtualPara
        
        setCurrencyAtualDe(currencyAtualParaTemp);
        setCurrencyAtualPara(currencyAtualDeTemp);

        setDe(temporaryPara);
        setPara(temporaryDe);


        
    }
    


    return <main className="flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col justify-center items-center font-titulo  gap-4 font-semibold md:font-bold">
                <h1 className="text-[32px] md:text-[48px] lg:text-[56px] text-(--title-color)">Conversor de moedas global.</h1>
                <p className="md:text-[30px] text-(--primary-color)">Faça sua conversão em tempo real.</p>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-center md:pb-20  bg-(--card-color) rounded-[48px] gap-6 px-8 py-5 mx-4">
        
                <div className="flex flex-col w-full md:w-fit">
                      <span className="font-medium text-(--label-color) md:font-bold md:text-[28px] text-[18px]">De</span>
                <div className="flex flex-col bg-white rounded-[10px] px-4 py-2">
                    <div className="flex items-center md:text-[20px] text-[16px] justify-between">
                    <Input type="number" value={de} onChange={(e) => handleDe(e.target.value)} placeholder="R$ 1,00"/>
                    <Select value={currencyAtualDe} onChange={(e) => handleChange(e.target.value)}  />
                    </div>
                </div>
                </div>
                <Button onClick={handleClick} className="self-center md:self-end" variant="secondary"><LucideArrowLeftRight/></Button>

                <div className="flex flex-col ">
                      <span className="md:self-end font-medium text-(--label-color) md:font-bold md:text-[28px] text-[18px]">Para</span>
                <div className="flex flex-col bg-white rounded-[10px] px-4 py-2">
                    <div className="flex items-center md:text-[20px] text-[16px] justify-between">
                    <Input  type="number" value={para} onChange={(e) => handlePara(e.target.value)}  placeholder="$ 0,19"/>
                    <Select  value={currencyAtualPara} onChange={(e) => handleChangeReverse(e.target.value)} reverse={true}/>
                    </div>
                </div>
                </div>
                <p className="absolute hidden md:block left-8 bottom-2.5 font-texto font-semibold text-[22px] md:text-[40px] text-(--text-titulo)">R$ 1,00 = {converting} USD</p>
            </div>
    </main>
}