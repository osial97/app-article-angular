import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArticoloComponent } from './form-articolo.component';

describe('FormArticoloComponent', () => {
  let component: FormArticoloComponent;
  let fixture: ComponentFixture<FormArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormArticoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
