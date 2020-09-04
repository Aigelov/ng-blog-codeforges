import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../common/material/common-material.module';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    CommonMaterialModule,
  ],
  exports: [],
  declarations: [
    LoginComponent
  ],
  providers: [],
})
export class LoginModule {
}
