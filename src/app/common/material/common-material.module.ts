import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatProgressBarModule, MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    CdkTableModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    CdkTableModule
  ],
  declarations: [],
  providers: [],
})

export class CommonMaterialModule {
}
