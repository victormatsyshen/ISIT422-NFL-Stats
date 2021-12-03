import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestTeamComponent } from './highest-team.component';

describe('HighestTeamComponent', () => {
  let component: HighestTeamComponent;
  let fixture: ComponentFixture<HighestTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
