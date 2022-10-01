import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCreateComponent } from './servico-create.component';

describe('ServicoCreateComponent', () => {
  let component: ServicoCreateComponent;
  let fixture: ComponentFixture<ServicoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
