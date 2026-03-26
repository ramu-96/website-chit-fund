import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule,ShieldCheck,Users,Eye } from 'lucide-angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule,LucideAngularModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class Auth {
  mail = new FormControl('');
  password = new FormControl('');
  readonly ShieldCheck = ShieldCheck;
  readonly Users = Users;
  readonly Eye = Eye;
constructor(private router: Router) {}

  loginBg = '/assets/login.png'; // ✅ leading slash is important
  login(){
      // Mark controls as touched so errors show
  this.mail.markAsTouched();
  this.password.markAsTouched();

    if(this.mail.invalid || this.password.invalid){
      alert('Please enter your credentials');
    }
    else if(this.mail.value === 'admin' && this.password.value === 'admin@123'){
   this.router.navigate(['/dashboard']);
    }
    else{
      alert('Invalid credentials');
    }
  }
}