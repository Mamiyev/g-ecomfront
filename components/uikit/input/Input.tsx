import clsx from 'clsx';
import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import css from './Input.module.css';

type IInputProps = {
    placeholder?: string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({ placeholder, className, ...props }, ref) => {
    return <input ref={ref} className={clsx(css.input, className)} type="text" placeholder={placeholder} {...props} />;
};

export default forwardRef(Input);
