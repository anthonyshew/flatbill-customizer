export const initialState = {
    product: '',
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'loadLocalStorage':
            return action.localStorageState
        default:
            return state
    }
}