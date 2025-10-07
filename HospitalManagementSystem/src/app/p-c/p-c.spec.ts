import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PC } from './p-c';

describe('PC', () => {
  let component: PC;
  let fixture: ComponentFixture<PC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
