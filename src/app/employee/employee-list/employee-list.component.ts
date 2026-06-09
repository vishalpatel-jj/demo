import { Component } from '@angular/core';
import { Employee } from '../../employee.model';
import { ManageEmployeeService } from '../../manage-employee.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  standalone: true,
})
export class EmployeeListComponent {
  employeeList: Employee[];
  constructor(private manageEmployeeService: ManageEmployeeService) {
    this.employeeList = this.manageEmployeeService.getEmployeeDetails();
  }
  @Output() editEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

  // function to delete a employee
  onDeleteClick(employee: Employee) {
    // const index = this.employeeList.indexOf(employee);
    // this.employeeList.splice(index, 1);
    this.manageEmployeeService.deleteEmployee(employee);
    this.employeeList = this.manageEmployeeService.getEmployeeDetails();
  }
  onEditClick(employee: Employee) {
    const index = this.employeeList.indexOf(employee);
    console.log(index);
    this.editEvent.emit(employee);
  }
}
