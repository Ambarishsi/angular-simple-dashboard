import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalSummaryComponent } from './graphical-summary.component';

describe('GraphicalSummaryComponent', () => {
  let component: GraphicalSummaryComponent;
  let fixture: ComponentFixture<GraphicalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicalSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
