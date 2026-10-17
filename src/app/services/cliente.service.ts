import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar(): Cliente[] {
    return [
      {
        id: 1,
        cpf: "24546323202",
        nome: "Lamine",
        sobrenome: "Yamal",
        dataNascimento: "13/07/2007",
        email: "lamine.yamal@gmail.com"
      },
      {
        id: 2,
        cpf: "35243543507",
        nome: "Hugo",
        sobrenome: "Calderano",
        dataNascimento: "22/06/1996",
        email: "hugo.calderano@gmail.com"
      },
      {
        id: 3,
        cpf: "96232578604",
        nome: "Thiago",
        sobrenome: "Leifert",
        dataNascimento: "22/05/1980",
        email: "thiago.leifert@gmail.com"
      }
    ];
  }//fim do listar
}
