import clsx from 'clsx';
import React, { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react';
import css from './Button.module.css';

type IButtonProps = {
    variant?: 'filled' | 'outlined';
    placeholder?: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (
    { variant = 'filled', children, placeholder, className, ...props },
    ref,
) => {
    return (
        <button
            ref={ref}
            className={clsx(
                css.button,
                { [css.filled]: variant === 'filled', [css.outlined]: variant === 'outlined' },
                className,
            )}
            placeholder={placeholder}
            {...props}
        >
            {children}
        </button>
    );
};

export default forwardRef(Button);
