import React from 'react';

interface IState {
    mobiles: [],
    favorites: []
}
interface IAction {
    type: string
    payload: any
}

const initialState: IState = {
    mobiles: [],
    favorites: []
}

export const Store = React.createContext<IState | any> ( initialState )
function reducer( state: IState, action: IAction ): IState {
    switch ( action.type ) {
        case 'FETCH_DATA':
            return { ...state, mobiles: action.payload }
        default:
            return state
    }
}


export function StoreProvider( props: any ): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return <Store.Provider value={{state, dispatch}} >{props.children}</Store.Provider>
}