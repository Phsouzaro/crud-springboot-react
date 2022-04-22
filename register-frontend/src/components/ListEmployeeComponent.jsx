import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default () => {

    let navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
        });
    }, [])

    const addEmployeeHandler = (e) => {
        e.preventDefault();
        navigate('/add-employee/_add');
    }

    const updateEmployeeHandler = (id) => {
        navigate(`/add-employee/${id}`);
    }

    const deleteEmployeeHandler = (id) => {
        EmployeeService.deleteEmployee(id).then(response => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    }

    const viewEmployeeHandler = (id) => {
        navigate(`/view-employee/${id}`);
    }

    return (
        <div className='contentHolder'>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployeeHandler}
                    style={{ marginBottom: '15px' }}>Add Employee</button>

            </div>
            <div className="row">
                <table className='table table-striped table bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmployeeHandler(employee.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => deleteEmployeeHandler(employee.id)}
                                        style={{ marginLeft: '15px', marginRight: '15px' }}>Delete</button>
                                    <button className="btn btn-info" onClick={() => viewEmployeeHandler(employee.id)}>Details</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );

}
