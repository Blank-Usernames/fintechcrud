export interface Cliente {
    id?: number;
    cpf: string;
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    email: string;
    senha?: string;
}