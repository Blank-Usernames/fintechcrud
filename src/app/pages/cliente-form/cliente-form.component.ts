import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = {} as Cliente;
  confirmarSenha: string = "";

  private service = inject(ClienteService);
  private router = inject(Router);

  private route = inject(ActivatedRoute);
  clienteId: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    if (this.clienteId) {
      this.service.buscarPorId(this.clienteId).subscribe({
        next: (cliente) => this.cliente = cliente,
        error: () => alert('Cliente não encontrado.')
      });
    } else {

    }
  }

  salvar() {
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    if (this.clienteId) {
      this.service.editar(this.cliente).subscribe({
        next: (cliente) => {
          alert(`${cliente.nome} ${cliente.sobrenome}, dados alterados com sucesso.`);
          this.cliente = cliente;
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => alert('Erro ao alterar o cliente.')
      })
    } else {
      this.service.incluir(this.cliente).subscribe({
        next: (cliente) => {
          alert(`Cliente: ${cliente.nome} ${cliente.sobrenome}\nID: ${cliente.id}`)
          this.router.navigate(["/admin-clientes-listar"]);
        }
      });
    }

  }
}
