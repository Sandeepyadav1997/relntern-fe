import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentordetailsComponent } from './mentordetails.component';

describe('MentordetailsComponent', () => {
  let component: MentordetailsComponent;
  let fixture: ComponentFixture<MentordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentordetailsComponent]
    });
    fixture = TestBed.createComponent(MentordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
