import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  imports: [ FormsModule ],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };
  
  cadastrar() {
    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }
    
    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
    console.log(this.cliente);
  }
}
