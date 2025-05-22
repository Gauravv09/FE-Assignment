import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
  // providers: [provideHttpClient()]
})
export class ReactiveformComponent {
  regForm;

  
  constructor(private _fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.regForm = this._fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
  if (this.regForm.valid) {
    alert('Registration successful!');
    this.router.navigate(['/gallery']);
  }
}


  simulate401() {
    this.http.get('https://httpstat.us/401').subscribe({
      next: res => console.log('Success:', res),
      error: err => console.error('Caught by component:', err)
    });
  }

  simulate503() {
    this.http.get('https://httpstat.us/503').subscribe({
      next: res => console.log('Success:', res),
      error: err => console.error('Caught by component:', err)
    });
}
}
