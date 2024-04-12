import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNomepennaComponent } from './edit-nomepenna.component';

describe('EditNomepennaComponent', () => {
  let component: EditNomepennaComponent;
  let fixture: ComponentFixture<EditNomepennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditNomepennaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNomepennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
