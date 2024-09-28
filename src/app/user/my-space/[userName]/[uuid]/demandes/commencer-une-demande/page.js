import React from 'react';
import DynamicForm from "@/component/forms/DynamicForm";

const Page = ({params}) => {
    return (
    <DynamicForm params={params} />
    );
};

export default Page;