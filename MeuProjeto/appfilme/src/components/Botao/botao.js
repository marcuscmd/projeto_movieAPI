import React from "react";
import { BotaoCustom } from "./styles";

export const Botao = ({type, text, onClick, disabled}) => {
    return (
        <BotaoCustom 
            type={type}
            onClick={onClick}
            disabled={disabled}
        > {text} </BotaoCustom>
    )
}
