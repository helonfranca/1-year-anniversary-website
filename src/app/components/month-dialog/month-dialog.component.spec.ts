import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDialogComponent } from './month-dialog.component';

describe('MonthDialogComponent', () => {
  let component: MonthDialogComponent;
  let fixture: ComponentFixture<MonthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
