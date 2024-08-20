import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonthDialogComponent } from '../month-dialog/month-dialog.component';
import { Months } from '../../Interfaces/months.interface';
import { monthsData } from '../../data/months-data';

@Component({
  selector: 'app-retrospective',
  standalone: true,
  imports: [
  ],
  templateUrl: './retrospective.component.html',
  styleUrl: './retrospective.component.css'
})

export class RetrospectiveComponent {
  months : Months[] = monthsData;

  constructor(public dialog: MatDialog) {}

  openModal(month: Months ) {
    this.dialog.open(MonthDialogComponent, {
      data: month,
      width: '600px'
    });
  }
}

