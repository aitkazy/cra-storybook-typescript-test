import React from 'react';
import './styles.sass';

type MyButton = {
    variant?: "first" | "second",
    width? : "fluid",
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const MyButton = ({ variant = 'first', width, ...rest } : MyButton) => {
    return <button className={`my-button--root my-button--variant-${variant} my-button--width-${width}`} {...rest} />
};