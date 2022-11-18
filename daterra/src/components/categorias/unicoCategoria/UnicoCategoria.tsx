import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId } from '../../../service/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function UnicoCategoria(){
const[categoria,setCategoria] = useState<Categoria>({
    id:0,
    tipo:'',
    produto: null
})

const {id} = useParams<{id:string}>();
const token = useSelector<TokenState,TokenState['tokens']>(
    (state)=>state.tokens
);

async function findById(id:string){
    await buscaId(`/categoria/{id}`, setCategoria,{
        headers:{
            Authorization: token
        }
    })
}


useEffect(()=>{
    if(id!==undefined){
        findById(id);
    }
},[id])

return(
<>
{/* estrutura card */}

</>
)

}
export default UnicoCategoria