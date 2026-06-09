import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../../employee.model';
import { FormsModule } from '@angular/forms';
import { ManageEmployeeService } from '../../manage-employee.service';
@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent {
  employeeList: Employee[];
  //  is employeeList and getEmployeeDetails have same reference in memory
  constructor(private manageEmployee: ManageEmployeeService) {
    this.employeeList = this.manageEmployee.getEmployeeDetails();
  }
  @Output() cancleButtonEvent = new EventEmitter<void>();
  @Input({ required: true }) employee: Employee;

  stateCities: { [key: string]: string[] } = {
    gujarat: ['ahmedabed', 'kalol', 'gandhinagar', 'deesa', 'mehsana'],
    maharashtra: [
      'pune',
      'mumbai',
      'nagpur',
      'nashik',
      'chhatrapati shambhajinagar',
    ],
    rajasthan: ['jaipur', 'udaipur', 'jhodpur', 'ajmer', 'jaisalmer'],
    bihar: ['patna', 'gaya', 'bhagalpur', 'muzaffarpur'],
  };
  onCancleClick() {
    this.cancleButtonEvent.emit();
  }
  name: string = '';
  number: string = '';
  email: string = '';
  position: string = '';
  aadhar: string = '';
  address: string = '';
  state: string = '';
  city: string = '';
  gender: string = '';
  selectedCityArray: string[] = [];
  ngOnChanges() {
    console.log(this.employee);
    this.name = this.employee?.name;
    this.number = this.employee?.phoneNumber;
    this.email = this.employee?.emailAddress;
    this.position = this.employee?.position;
    this.aadhar = this.employee?.aadharNumber;
    this.address = this.employee?.address;
    this.state = this.employee?.state;
    this.city = this.employee.city;
    this.gender = this.employee.gender;
    this.selectedCityArray = this.stateCities[this.state];
  }
  onStateChange() {
    this.selectedCityArray = this.stateCities[this.state];
  }
  onSubmitForm() {
    const index = this.employeeList.indexOf(this.employee);
    const employe = {
      name: this.name,
      id: this.employee.id,
      phoneNumber: this.number,
      emailAddress: this.email,
      position: this.position,
      aadharNumber: this.aadhar,
      address: this.address,
      state: this.state,
      city: this.city,
      gender: this.gender,
    };
    this.employeeList[index] = employe;
    // this.manageEmployee.editEmployee(this.employee, employe);
    this.cancleButtonEvent.emit();
  }
}
