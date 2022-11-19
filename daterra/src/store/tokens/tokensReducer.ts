import { Action } from './actions'

export interface TokenState {
    tokens: string,
    tipoUser: string
    id: string
}

const initialState = {
    tokens: '',
    tipoUser: '',
    id: ''
}

export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload, tipoUser: state.tipoUser, id: state.id }
        };

        case "ADD_TIPOUSER": {
            return { tipoUser: action.payload, tokens: state.tokens, id: state.id }
        };
        case 'ADD_ID': {
            return { id: action.payload, tokens: state.tokens, tipoUser:state.tipoUser }
        }
        default: return state
    }
}