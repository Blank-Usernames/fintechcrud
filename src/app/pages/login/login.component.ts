import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { };

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

  //Verifico se o usuário e senha são válidos
  fazerLogin() {
    if (this.login === 'admin@email.com' && this.senha === '123') {
      alert(`Bem-vindo ${this.login}!`);
      this.router.navigate(['/admin-clientes-listar']);
    } else {
      alert('Dados inválidos');
    }
  }

  /*onBotaoClick() {
    alert("[LOGIN] SUCESS");
  }*/

  /*teclaDigitada(evento: KeyboardEvent):void {
    alert(`O usuário digitou ${evento.key}`)
  }*/


}
