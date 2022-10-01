import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoUpdateComponent } from './servico-update.component';

describe('ServicoUpdateComponent', () => {
  let component: ServicoUpdateComponent;
  let fixture: ComponentFixture<ServicoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
