import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszenieFormComponent } from './ogloszenie-form.component';

describe('OgloszenieFormComponent', () => {
  let component: OgloszenieFormComponent;
  let fixture: ComponentFixture<OgloszenieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgloszenieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgloszenieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
