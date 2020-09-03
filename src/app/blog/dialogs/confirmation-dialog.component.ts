import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: 'confirmation-dialog.component.html'
})

export class ConfirmationDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<void>
  ) {
  }

  ngOnInit() {
  }

  public submit() {
    this.dialogRef.close(true);
  }
}
