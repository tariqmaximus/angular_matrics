import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricsTableComponent } from './matric-table.component';

describe('MatricsTableComponent', () => {
  let component: MatricsTableComponent;
  let fixture: ComponentFixture<MatricsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatricsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatricsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
