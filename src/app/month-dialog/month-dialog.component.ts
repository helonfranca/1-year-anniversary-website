import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-month-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
  ],
  templateUrl: './month-dialog.component.html',
})
export class MonthDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
