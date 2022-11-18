export type Action = {type:'ADD_TOKEN'|'ADD_TIPOUSER', payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token
})

export const addTipoUser = (tipoUser: string): Action => ({
    type: "ADD_TIPOUSER",
    payload: tipoUser
})