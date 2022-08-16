import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateAllComponent } from './cliente-create-all.component';

describe('ClienteCreateAllComponent', () => {
  let component: ClienteCreateAllComponent;
  let fixture: ComponentFixture<ClienteCreateAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCreateAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCreateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
