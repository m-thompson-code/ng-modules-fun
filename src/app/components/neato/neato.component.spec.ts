import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeatoComponent } from './neato.component';

describe('NeatoComponent', () => {
  let component: NeatoComponent;
  let fixture: ComponentFixture<NeatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
