export const initialState = {
    price: 300,
    view: 'front',
    model: 'striper',
    primaryColor: 'red',
    secondaryColor: 'yellow',
    tertiaryColor: 'blue',
    chestLogo: 'logo',
    leftArmLogo: 'logo',
    rightArmLogo: 'hamburger',
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'loadLocalStorage':
            return action.localStorageState
        case 'flipView':
            return {
                ...state,
                view: action.newView
            }
        default:
            return state
    }
}