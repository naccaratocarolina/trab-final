import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	/** Formulario **/
	registerForm: FormGroup;

	constructor(private router: Router, public formbuilder: FormBuilder) {

		this.registerForm = this.formbuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required, Validators.minLength(6)]]
		});
	}

	/**
  	redirecionaTab1() {
    	this.router.navigateByUrl('/tabs/tab1');
 	}
	**/

 	submitForm(form) {
 		console.log(form);
 		console.log(form.value);

 		this.router.navigateByUrl('/tabs/tab1'); //redireciona pra home
 	}

 	/** Storage
 	storageForm() {
 		this.storage.set('name', 'Max');
 	}
 	**/

	ngOnInit() { }

}
