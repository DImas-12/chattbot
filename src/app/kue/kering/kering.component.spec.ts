import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeringComponent } from './kering.component';

describe('KeringComponent', () => {
  let component: KeringComponent;
  let fixture: ComponentFixture<KeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
