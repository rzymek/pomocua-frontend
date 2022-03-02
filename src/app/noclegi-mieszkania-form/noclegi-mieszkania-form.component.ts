import { Component, OnInit } from '@angular/core';
import { Ogloszenie } from "../ogloszenie-form/ogloszenie-form.component";

@Component({
  selector: 'app-noclegi-mieszkania-form',
  templateUrl: './noclegi-mieszkania-form.component.html',
  styleUrls: ['./noclegi-mieszkania-form.component.scss']
})
export class NoclegiMieszkaniaFormComponent {
  data= {
    lokalizacja: '',
    osob: undefined,
    czasPobytu: undefined,
    jezyk: undefined
  }

  handleSubmit(ogloszenie: Ogloszenie) {
    console.log({
      ...ogloszenie,
      ...this.data,
    })
  }
}
