import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoclegiMieszkaniaFormComponent } from './noclegi-mieszkania-form.component';

describe('NoclegiMieszkaniaFormComponent', () => {
  let component: NoclegiMieszkaniaFormComponent;
  let fixture: ComponentFixture<NoclegiMieszkaniaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoclegiMieszkaniaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoclegiMieszkaniaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
