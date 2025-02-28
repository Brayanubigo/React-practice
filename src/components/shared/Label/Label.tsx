import React from "react";

interface LabelProps {
    children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => (
    <div className="w-24 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
        {children}
    </div>
)