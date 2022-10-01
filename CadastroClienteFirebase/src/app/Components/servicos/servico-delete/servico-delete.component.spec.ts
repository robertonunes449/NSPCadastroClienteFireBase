import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoDeleteComponent } from './servico-delete.component';

describe('ServicoDeleteComponent', () => {
  let component: ServicoDeleteComponent;
  let fixture: ComponentFixture<ServicoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
