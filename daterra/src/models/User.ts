import Produto from "./Produto";

interface User {
    id: number;
    nome: string;
    usuario: string;
    tipoUser: string;
    cep: string;
    cpf: string;
    cpnj: string;
    foto: string;
    senha: string;
    produto?: Produto[]  //linha adicionada para que o usuário possa ter um
}

export default User;