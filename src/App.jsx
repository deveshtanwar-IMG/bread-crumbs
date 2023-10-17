import React, { useState } from 'react';
import './App.css';

function App() {
  const [breadcrumb, setBreadcrumb] = useState(['Home']);
  const [currentRole, setCurrentRole] = useState(['Home']);

  const tableData = {
    Home: [
      { role: 'about', empID: '1052', empName: 'John' },
    ],
    about: [
      { role: 'contacts', empID: '1054', empName: 'Bob' },
    ],
    contacts: [
      { role: 'students', empID: '1055', empName: 'Sam' },
    ],
    students: [
      { role: 'stu1', empID: '1055', empName: 'Eve' },
    ],
    stu1: [
      { role: 'Developer', empID: 'Emp/256/123', empName: 'Robbie', position: 'final'},
    ],
  };

  const handleBreadcrumbClick = (role) => {
    const currentIndex = breadcrumb.indexOf(role);
    if (currentIndex === -1) {
      setBreadcrumb([...breadcrumb, role]);
      setCurrentRole(role)
    } 
    else {
      setBreadcrumb(breadcrumb.slice(0, currentIndex + 1));
      setCurrentRole(role)
    }
  };

  return (
    <div>
      <h1 style={{ margin: "0px" }}>Bread-Crumbs</h1>

      <div className='breadcrumb'>
        {breadcrumb.map((item, index) => (
          <span key={index}>
            <a onClick={() => handleBreadcrumbClick(item)}>{item}</a>
            {index < breadcrumb.length-1 && ' / '}
          </span>
        ))}
      </div>

      <div className='breadcrumb-table'>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Emp ID</th>
              <th>Emp Name</th>
            </tr>
          </thead>
          <tbody>
            {tableData[currentRole] && tableData[currentRole].map((data, index) => {
              return (
                <tr key={index}>
                  {data.position !== 'final' ? 
                    <td className='role' onClick={() => handleBreadcrumbClick(data.role)}>
                    {data.role}
                    </td>
                    :
                    <td className='no-role'>
                    {data.role}
                    </td>
                  }
                  <td>{data.empID}</td>
                  <td>{data.empName}</td>
                </tr> 
              )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;