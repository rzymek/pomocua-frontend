import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface Ogloszenie {
  tytul: string;
  tresc: string;
}

@Component({
  selector: 'app-ogloszenie-form',
  templateUrl: './ogloszenie-form.component.html',
  styleUrls: ['./ogloszenie-form.component.scss']
})
export class OgloszenieFormComponent {
  @Input()
  tytul: string='';
  @Input()
  tresc: string='';

  @Output() onSubmit = new EventEmitter<Ogloszenie>();
}
