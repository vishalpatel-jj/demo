import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { Employee } from './employee.model';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgIf,
    HeaderComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'event-management-system';
  showModal: boolean = false;
  editModal: boolean = false;
  selectedEmployeeToEdit: Employee;
  // this function is for to close modal pop up and display employee list
  handleCancleEvent() {
    this.showModal = false;
  }
  // this function helps to open modal for adding a new employee
  handleAddEmployeeEvent() {
    this.showModal = true;
  }

  onEditClick(employee: Employee) {
    this.editModal = true;
    this.selectedEmployeeToEdit = employee;
  }

  onCancleClick() {
    this.editModal = false;
  }
}
