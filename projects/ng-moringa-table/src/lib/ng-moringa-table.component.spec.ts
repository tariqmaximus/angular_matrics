import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmatricTableComponent } from './ng-matric-table.component';

describe('NgmatricTableComponent', () => {
  let component: NgmatricTableComponent;
  let fixture: ComponentFixture<NgmatricTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgmatricTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmatricTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
