import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarOutComponent } from './far-out.component';

describe('FarOutComponent', () => {
  let component: FarOutComponent;
  let fixture: ComponentFixture<FarOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
