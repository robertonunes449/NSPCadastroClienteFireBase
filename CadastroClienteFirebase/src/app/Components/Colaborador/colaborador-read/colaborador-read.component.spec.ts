import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorReadComponent } from './colaborador-read.component';

describe('ColaboradorReadComponent', () => {
  let component: ColaboradorReadComponent;
  let fixture: ComponentFixture<ColaboradorReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
