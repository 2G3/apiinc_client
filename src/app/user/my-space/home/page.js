///app/user/my-space/home/page.js
"use client";
import { useDispatch, useSelector } from "react-redux";

import React from 'react';
import UserHomme from "@/component/users/user/UserHomme";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const permissions = useSelector((state)=>state.auth.permissions)

    console.log("user permission: ", permissions)
    return (
        <div className="min-h-[100vh]">
            {permissions?.includes("AS_SIMPLE_USER") && (
                <UserHomme/>
            )}
             {/*Contenu spécifique à la page */}
        </div>
    );
};

export default page;
