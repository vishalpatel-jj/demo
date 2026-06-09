import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() addEmployeeEvent = new EventEmitter<void>();
  addButtonClick() {
    this.addEmployeeEvent.emit();
  }
}
