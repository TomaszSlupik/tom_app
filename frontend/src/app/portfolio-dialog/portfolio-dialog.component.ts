import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.scss']
})
export class PortfolioDialogComponent {
  currentImageIndex = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PortfolioDialogComponent>
  ) {}

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.data.images.length;
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.data.images.length) % this.data.images.length;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
}