import {Component} from '@angular/core';

/**
 *  - Como hago para que el elemento input propague sus propios cambios a la variable zipCode del componente?
 *  - Como hago para que los cambios en el elemento input causen que se compruebe la validez de zipCode automaticamente?
 *  - Como hago para que los cambios programaticos (desde el componente) a zipCode causen que se compruebe su validez automaticamente?
 *  - Como hago para que el componente compruebe la validez de zipCode apenas inicie?
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Pablo López';
  zipCode = '123456';
  zipCodeIsValid = true;

  changeName() {
    this.name = 'Ana Arguedas';
  }

  changeZipCode() {
    this.zipCode = '33152';
  }

  validateZipCode() {
    if (this.zipCode.length === 5)
      this.zipCodeIsValid = true;
    else
      this.zipCodeIsValid = false;
  }

}
