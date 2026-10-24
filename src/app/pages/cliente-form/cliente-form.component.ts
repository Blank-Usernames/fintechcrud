import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [ FormsModule ],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  cliente = {} as Cliente;
  confirmarSenha: string = "";

  private service = inject(ClienteService);
  private router = inject(Router);
  
  salvar() {
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }
    
    this.service.incluir(this.cliente).subscribe({
      next: (cliente)=>{
        alert(`Cliente: ${cliente.nome} ${cliente.sobrenome}\nID: ${cliente.id}`)
        this.router.navigate(["/admin-clientes-listar"]);
      }
    });
  }
}
