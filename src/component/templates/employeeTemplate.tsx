import React from 'react';
import Header from '../organisms/Header';

interface Props {
    title: string;
    children: React.ReactNode;
}

const EmployeeTemplate = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="employee-template">
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default EmployeeTemplate;