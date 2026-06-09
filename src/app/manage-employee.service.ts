import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class ManageEmployeeService {
  employeeDetails: Employee[];
  constructor() {
    this.employeeDetails = [
      {
        name: 'vishal',
        id: 453258643,
        phoneNumber: '9106642713',
        emailAddress: 'vishal567patel@gmail.com',
        position: 'fresher',
        aadharNumber: '9855687458621457',
        address: '23-ganesh-3 , raysan , gandhinagar',
        state: 'gujarat',
        city: 'ahmedabed',
        gender: 'male',
      },
      {
        name: 'shah pritesh',
        id: 5687411346,
        phoneNumber: '9987544695',
        emailAddress: 'prit567patel@gmail.com',
        position: 'senior developer',
        aadharNumber: '98556878467621457',
        address: '28 shri hari society , kalol',
        state: 'gujarat',
        city: 'ahmedabed',
        gender: 'male',
      },
      {
        name: 'bhaveshbhai patel',
        id: 453258648,
        phoneNumber: '9663585548',
        emailAddress: 'bhaveshbhaipatel@gmail.com',
        position: 'ceo',
        aadharNumber: '8955568545586595',
        address: 'a-304, yash-parisar',
        state: 'gujarat',
        city: 'ahmedabed',
        gender: 'male',
      },
    ];
  }
  getEmployeeDetails() {
    return this.employeeDetails;
  }
  addEmployee(employee: Employee) {
    this.employeeDetails.push(employee);
    console.log(employee);
  }
  deleteEmployee(employee: Employee) {
    debugger;
    this.employeeDetails = this.employeeDetails.filter((data) => {
      return data.aadharNumber !== employee.aadharNumber;
    });
    console.log(this.employeeDetails);

    //   const index = this.employeeDetails.indexOf(employee);
    //   this.employeeDetails.splice(index, 1);
  }

  editEmployee(employee: Employee, employe: Employee) {
    const index = this.employeeDetails.indexOf(employee);
    console.log(index);
    this.employeeDetails[index] = employe;
  }
}
