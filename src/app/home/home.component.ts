import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Formposter } from '../services/form-poster.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = [];
  model = new Employee('', '', true, '', 'default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster: Formposter) { 
    this.formPoster.getLanguages()
        .subscribe(
          data => this.languages = data.languages,
          err => console.log('get error: ', err)
        );
   }

  submitForm(form: NgForm) {
    console.log(this.model);

    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) {
      return;
    }
    
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      )
  }

  ngOnInit() {  }

  validatePrimaryLanguage(value){
    if (value === 'default'){
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
  }

}
