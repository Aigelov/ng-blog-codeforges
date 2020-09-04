import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../common/user/models/user-login';
import { NgForm } from '@angular/forms';
import { AuthService } from '../common/auth/services/auth.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  public user = {} as UserLogin;
  public loading = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.authService.signIn(this.user)
        .pipe(
          finalize(() => this.loading = false)
        )
        .subscribe(response => {
          this.router.navigate(['blog', 'list']);
        });
    }
  }
}
