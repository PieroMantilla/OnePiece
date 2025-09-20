import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetail } from './crew-detail';

describe('CrewDetail', () => {
  let component: CrewDetail;
  let fixture: ComponentFixture<CrewDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
