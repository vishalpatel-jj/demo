import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageEmployeeService } from '../../manage-employee.service';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  @Output() cancleEvent = new EventEmitter<void>();
  constructor(private manageEmployeeService: ManageEmployeeService) {}

  name: string = '';
  number: string = '';
  email: string = '';
  position: string = '';
  aadharNumber: string = '';
  address: string = '';
  statee: string = '';
  city: string = '';
  gender: 'male' | 'female';

  selectedStateCities: Array<string> = [];
  states = ['gujarat', 'maharashtra', 'rajasthan', 'bihar'];

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

  onStateChange(state: string) {
    this.selectedStateCities = this.stateCities[state];
  }

  // what to do when cancle button is clicked -> close form modal
  cancleButtonClick() {
    this.cancleEvent.emit();
  }

  onFormSubmission() {
    if (!this.name || !this.email) {
      return;
    }
    const employee: Employee = {
      name: this.name,
      id: Date.now(),
      phoneNumber: this.number,
      emailAddress: this.email,
      position: this.position,
      aadharNumber: this.aadharNumber,
      address: this.address,
      state: this.statee,
      city: this.city,
      gender: this.gender,
    };
    this.manageEmployeeService.addEmployee(employee);
    this.cancleEvent.emit();
    console.log(employee, this.statee);
  }
}
