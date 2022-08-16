import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDeleteComponent } from './colaborador-delete.component';

describe('ColaboradorDeleteComponent', () => {
  let component: ColaboradorDeleteComponent;
  let fixture: ComponentFixture<ColaboradorDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
