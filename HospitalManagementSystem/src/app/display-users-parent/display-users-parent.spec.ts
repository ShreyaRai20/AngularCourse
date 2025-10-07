import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUsersParent } from './display-users-parent';

describe('DisplayUsersParent', () => {
  let component: DisplayUsersParent;
  let fixture: ComponentFixture<DisplayUsersParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayUsersParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayUsersParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
