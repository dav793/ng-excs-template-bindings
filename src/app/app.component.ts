import {Component, OnInit} from '@angular/core';

/**
 *  - Como puedo hacer para que el elemento input refleje los cambios a la variable zipCode del componente?
 *  - Como puedo hacer para que los cambios programaticos a zipCode causen que se compruebe su validez automaticamente?
 *  - Como puedo hacer para que el componente compruebe la validez de zipCode apenas inicie?
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Pablo López';
  zipCode = '123456';
  zipCodeIsValid = true;

  changeName() {
    this.name = 'Ana Arguedas';
  }

  changeZipCode() {
    this.zipCode = '33152';
    this.validateZipCode();
  }

  validateZipCode() {
    if (this.zipCode.length === 5)
      this.zipCodeIsValid = true;
    else
      this.zipCodeIsValid = false;
  }

  ngOnInit() {
    this.validateZipCode();
  }

}
