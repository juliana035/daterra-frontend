export type Action = {type:'ADD_TOKEN'|'ADD_TIPOUSER'|'ADD_ID', payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token
})

export const addTipoUser = (tipoUser: string): Action => ({
    type: "ADD_TIPOUSER",
    payload: tipoUser
})

export const addId = (id:string): Action =>({
    type: 'ADD_ID',
    payload: id
})