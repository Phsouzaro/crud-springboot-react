import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {

    let navigate = useNavigate();

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [saveEmployee, setSaveEmployee] = useState([]);

    const saveEmployeeHandler = (e) => {
        e.preventDefault();

        let employee = { firstName: firstName, lastName: lastName, emailId: emailId };
        console.log(`Employee = ${JSON.stringify(employee)}`)
        setSaveEmployee(employee);

    }

    const changeFirstNameHandler = (event) => {
        setfirstName(event.target.value);
    }
    const changeLastNameHandler = (event) => {
        setlastName(event.target.value);
    }
    const changeEmailNameHandler = (event) => {
        setEmailId(event.target.value);
    }

    const cancel = (e) => {
        e.preventDefault();
        console.log('Chamou cancel')
        navigate('/');
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 " style={{ marginTop: "10px" }}>
                        <h3 className="text-center">Add Employee</h3>

                        <div className="card-body" >
                            <form>
                                <div className="form-group">
                                    <label htmlFor="">First Name:</label>
                                    <input placeholder='First Name' name='firstname' className="form-control"
                                        value={firstName} onChange={changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Last Name:</label>
                                    <input placeholder='Last Name' name='lastname' className="form-control"
                                        value={lastName} onChange={changeLastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">E-mail:</label>
                                    <input placeholder='Email' name='email' className="form-control"
                                        value={emailId} onChange={changeEmailNameHandler} />
                                </div>
                                <button className="btn btn-success" onClick={saveEmployeeHandler}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: '10px' }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
