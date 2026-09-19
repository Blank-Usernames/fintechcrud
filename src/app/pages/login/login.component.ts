import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = "";
  senha: string = "";
  isDisabled: boolean = true;


  //Validar se os campos foram preenchidos para habilitar o botão de login
  validarFormulario() {
    if (this.login.trim() !== "" && this.senha.trim() !== "") {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  fazerLogin() {
    if(this.login == "admin@email.com" && this.senha == "123") {
      alert(`[LOGIN] SUCESS! Bem Vindo: ${this.login}`)
    } else {
      alert("[LOGIN] INVALID CREDENTIALS")
    }
  }

  /*onBotaoClick() {
    alert("[LOGIN] SUCESS");
  }*/

  /*teclaDigitada(evento: KeyboardEvent):void {
    alert(`O usuário digitou ${evento.key}`)
  }*/


}
