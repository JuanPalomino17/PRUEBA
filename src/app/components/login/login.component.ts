import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form :FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  ingresar(){

    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

    console.log(usuario);
    console.log(contraseña);
    if(usuario =='jpalomino' && contraseña =='123'){
      // redireccionado al dasboard
      this.fakeLoading();
  }else{
    //mostramos el mensaje de error
    this.error();
    this.form.reset();
  }
  }
  error(){
    this._snackBar.open('usuario o contraseña ingresados son validos', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  fakeLoading(){
    this.loading = true;
    setTimeout(() => {

      
      this.router.navigate(['dasboard']);
    }, 1500);
  }

}
