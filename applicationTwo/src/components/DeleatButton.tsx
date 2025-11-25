
import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface DeleteBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const DeleatBar = ({ children, ...props }: DeleteBarProps) => {
    return (
        <div className="deletebar">
            <button
                className="clear-cart-button"
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

export default DeleatBar;
