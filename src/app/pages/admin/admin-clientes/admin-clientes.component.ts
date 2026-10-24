import { Component, inject, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin-clientes',
  imports: [RouterLink],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {

  private service = inject(ClienteService);

  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (clientes)=>{
        this.listaClientes = clientes;
      }
    });
  }


  editar(id: string) {
    console.log('Editar cliente:', id);
  }
  excluir(id: string) {
    this.service.excluir(id).subscribe({
      next: ()=>{
        this.listaClientes = this.listaClientes.filter(cliente=>cliente.id !== id);
      }
    });
  }
}
