import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default () => {

    let navigate = useNavigate();

    const { id } = useParams();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {
        if (id !== "_add")
            EmployeeService.getEmployeeById(id).then(response => {
                let employee = response.data;
                setfirstName(employee.firstName);
                setlastName(employee.lastName);
                setEmailId(employee.emailId);
            });
    }, []);

    const saveEmployeeHandler = (e) => {
        e.preventDefault();
        let employee = { firstName: firstName, lastName: lastName, emailId: emailId };
        console.log(`Employee = ${JSON.stringify(employee)}`)

        id === "_add" ? EmployeeService.createEmployees(employee).then(response => {
            navigate('/employees');
        }) :
            EmployeeService.updateEmployee(employee, id).then(response => {
                navigate('/employees');
            });

    }

    const getTitle = () => {
        return id === "_add" ? <h3 className="text-center">Add Employee</h3> :
            <h3 className="text-center">Update Employee</h3>;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 " style={{ marginTop: "10px" }}>
                        {getTitle()}
                        <div className="card-body" >
                            <form>
                                <div className="form-group">
                                    <label htmlFor="">First Name:</label>
                                    <input placeholder='First Name' name='firstname' className="form-control"
                                        value={firstName} onChange={(event) => setfirstName(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Last Name:</label>
                                    <input placeholder='Last Name' name='lastname' className="form-control"
                                        value={lastName} onChange={(event) => setlastName(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">E-mail:</label>
                                    <input placeholder='Email' name='email' className="form-control"
                                        value={emailId} onChange={(event) => setEmailId(event.target.value)} />
                                </div>

                                <button className="btn btn-success" onClick={saveEmployeeHandler}>Save</button>
                                <button className="btn btn-danger" onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
