import Produto from "./Produto";

interface Categoria{
    id: number;
    tipo: string;
    produto?: Produto[] | null;
}

export default Categoria;