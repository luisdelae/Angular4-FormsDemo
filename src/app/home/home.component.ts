import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

  languages = ['English', 'Spanish', 'Other'];
  // model = new Employee('Darla', 'Smith', true, 'w2', 'English');
  model = new Employee('', '', true, '', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value){
    if (value === 'default'){
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
  }

}
