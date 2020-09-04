import { NgModule } from '@angular/core';
import { AuthResourceService } from './services/auth-resource.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AuthResourceService,
    AuthService
  ],
})
export class AuthModule {
}
