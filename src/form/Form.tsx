"use client";

import { useState } from "react";

export default function Form () {

    const [inputTextValue, setInputTextValue] = useState('');

    const handleTextInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        const newValue: string = event.currentTarget.value;
        console.log(newValue)
        setInputTextValue(newValue);
    }
    return (
        <form action="">
            <input type="text" name="" id="" onChange={handleTextInput} value={inputTextValue}/>
        </form>
    );
}