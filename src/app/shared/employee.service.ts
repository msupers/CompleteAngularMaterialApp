import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  // FormGroup is a Object,describe Form structor
  form: FormGroup = new FormGroup({
    // identify  of each rows
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl('1'),      // 性别
    department: new FormControl('0'),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false),
  });
}
