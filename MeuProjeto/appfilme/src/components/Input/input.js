import React from "react";
import { InputCustom } from "./styles";

export const Input = ({name, placeholder, onChange, type, value}) => {
    return (
        <InputCustom 
            name={name} 
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            value={value}
        />
    )
}