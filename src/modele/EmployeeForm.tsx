import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../pages/base';
import Button from '../component/Button';

interface Props {
    employee?: Employee;
    setEmployee: (employee: Employee) => void;
    label: string;
}

const TaskForm = (props: Props) => {
    const navigate = useNavigate();

    // 状態変数の定義(初期値はprops.task)
    const [employee, setEmployee] = useState<Employee>(props.employee || {
        id: 0,
        name: '',
        company: '',
        email: ''
    });

    // フォームの入力値をセットする関数
    const handleNameChange = (e: any) => {
        setEmployee({ ...employee, name: e.target.value });
    };
    const handleCompanyChange = (e: any) => {
        setEmployee({ ...employee, company: e.target.value });
    };
    const handleEmailChange = (e: any) => {
        setEmployee({ ...employee, email: e.target.value });
    };

    // フォームの送信を処理する関数
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.setEmployee(employee);
        navigate('/employee');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="employee-form-wrapper">
                    <div className="employee-form-item">
                        <label>氏名</label>
                        <div className="employee-form-input">
                        <input
                            type="text"
                            placeholder="名前"
                            value={employee.name}
                            onChange={handleNameChange}
                            required />
                        </div>
                    </div>
                    <div className="employee-form-item">
                        <label>所属企業</label>
                        <div className="employee-form-input">
                        <input
                            type="text"
                            placeholder="所属企業"
                            value={employee.company}
                            onChange={handleCompanyChange}
                            required />
                        </div>
                    </div>
                    <div className="employee-form-item">
                        <label>メールアドレス</label>
                        <div className="employee-form-input">
                        <input
                            type="email"
                            placeholder="メールアドレス"
                            value={employee.email}
                            onChange={handleEmailChange}
                            required />
                        </div>
                    </div>
                </div>
                <div >
                    <Button className="primary" label={props.label} />
                </div>
            </form>
        </div>
    );
};

export default TaskForm;