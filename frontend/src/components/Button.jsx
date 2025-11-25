import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, onClick, isLoading, className = '' }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "border-transparent text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/20",
        secondary: "border-slate-700 text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white",
        outline: "border-slate-600 text-slate-400 hover:border-slate-400 hover:text-white bg-transparent"
    };

    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {isLoading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : Icon && <Icon className="w-5 h-5 mr-2" />}
            {children}
        </button>
    );
};

export default Button;