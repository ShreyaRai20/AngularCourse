import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListener } from './event-listener';

describe('EventListener', () => {
  let component: EventListener;
  let fixture: ComponentFixture<EventListener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListener);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
