import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.scss']
})
export class PortfolioDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private dialogRef: MatDialogRef<PortfolioDialogComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
