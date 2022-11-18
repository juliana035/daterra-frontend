import Categoria from "./Categoria";
import User from "./User";

interface Produto{
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string; 
    quantidade: number;
    categoria?: Categoria | null;
    usuario?: User | null;  //linha adicionada para vincular um usuário
}

export default Produto;