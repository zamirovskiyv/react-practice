import React from 'react';

type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
    isDisabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onClick, className, isDisabled }) => {
    return (
        <button className={className} onClick={onClick} disabled={isDisabled}>
            {title}
        </button>
    );
};

export default Button;
