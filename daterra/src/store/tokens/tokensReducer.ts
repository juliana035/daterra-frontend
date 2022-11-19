import { Action } from './actions'

export interface TokenState {
    id: string
    tokens: string,
    tipoUser: string
}

const initialState = {
    tokens: '',
    tipoUser: ''
}

export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload, tipoUser: state.tipoUser }
        };

        case "ADD_TIPOUSER": {
            return { tipoUser: action.payload, tokens: state.tokens }
        }
        
        default: return state
    }
}