import { Component, inject, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../services/cliente.service';


@Component({
  selector: 'app-admin-clientes',
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {

  private service = inject(ClienteService);

  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.listaClientes = this.service.listar();
  }


  editar(id: number) {
    console.log('Editar cliente:', id);
  }
  excluir(id: number) {
    console.log('Excluir cliente:', id);
  }
}
