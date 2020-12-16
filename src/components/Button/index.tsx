import React, { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';

export interface ICustomButtonProps {
    buttonVariant: 'primary' | 'outline-primary' | 'outline-light';
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    props?: any;
}

const CustomButton: React.FC<ICustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    buttonVariant,
    children,
    onClick = () => {},
    ...props
}) => {
    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e);
    };

    return (
        <Button variant={buttonVariant} block onClick={handleOnClick} {...props}>
            {children}
        </Button>
    );
}

export default CustomButton;
