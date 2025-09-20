import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewsList } from './crews-list';

describe('CrewsList', () => {
  let component: CrewsList;
  let fixture: ComponentFixture<CrewsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
