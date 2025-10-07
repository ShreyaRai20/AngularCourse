import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersParent } from './users-parent';

describe('UsersParent', () => {
  let component: UsersParent;
  let fixture: ComponentFixture<UsersParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
