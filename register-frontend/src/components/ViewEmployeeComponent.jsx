import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import EmployeeService from '../services/EmployeeService';

export default () => {

    let navigate = useNavigate();

    const { id } = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(respo => {
            setEmployee(respo.data);
        })
    }, []);

    console.log(employee)


    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md3">
                <h3 className='text-center'>Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label htmlFor="">First Name: </label>
                        <div style={{ marginLeft: '15px' }}>{employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label htmlFor="">Last Name: </label>
                        <div style={{ marginLeft: '15px' }}>{employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label htmlFor="">Email: </label>
                        <div style={{ marginLeft: '15px' }}>{employee.emailId}</div>
                    </div>
                    <div className="row">
                        <button className="btn btn-info" onClick={() => navigate('/employees')}
                            style={{ marginTop: '30px' }}>Go back</button>
                    </div>
                </div>

            </div>
        </div>
    )
}