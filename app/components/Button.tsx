'use client';
import React from 'react';

interface ButtonProps extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    disabled?: boolean;
}

const Button = ({disabled, ...rest}: ButtonProps) => {
    return <button {...rest} className={`py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded ${!disabled && 'hover:bg-gray-800 active:bg-gray-950' || disabled && 'text-zinc-100'}` } />
}

export default Button;