import { FormsModule } from '@angular/forms';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomToastComponent } from './custom-toast/custom-toast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustomToastComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent,
      closeButton: true,
      positionClass: 'toast-top-right',
      newestOnTop: false, // added custom toast!
    }),
    // Não pode ser usado (LAZYLOADING)
    // CursosModule,
    // AlunosModule
  ],
  providers: [
     AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
