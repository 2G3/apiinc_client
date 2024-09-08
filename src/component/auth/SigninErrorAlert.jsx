import React from "react";

const SigninErrorAlert = ({error}) => {
    return (
        <div className="relative flex items-center space-x-4 p-4 border-l-4 border-red-400 bg-red-50 rounded-lg shadow-md dark:bg-red-100 dark:border-red-300">
            <div className="flex-1">
                <h3 id="hs-bordered-red-style-label" className="text-lg font-semibold text-red-600">
                    Erreur !
                </h3>
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            </div>
            <div className="absolute top-2 right-2">
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a1 1 0 010 2 1 1 0 010-2zm1.293-5.293a1 1 0 00-1.414 0L10 3.586 8.707 2.293a1 1 0 10-1.414 1.414L8.586 5l-1.293 1.293a1 1 0 001.414 1.414L10 6.414l1.293 1.293a1 1 0 001.414-1.414L11.414 5l1.293-1.293a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export  default SigninErrorAlert;