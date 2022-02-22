import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasahComponent } from './basah.component';

describe('BasahComponent', () => {
  let component: BasahComponent;
  let fixture: ComponentFixture<BasahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
