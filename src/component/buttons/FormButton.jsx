import React from 'react';




export const FormNextButton= ({ text, disabled = false }) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="px-4 py-2 bg-[#162542] text-white rounded-md hover:bg-[#0f1a3c] transition"
        >
            {text}
        </button>
    );
}

export const FormBackButton= ({ text, onClick, disabled = false }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
        >
            {text}
        </button>
    );
}