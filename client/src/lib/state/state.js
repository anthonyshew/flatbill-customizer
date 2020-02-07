export const initialState = {
    price: 300,
    view: 'front',
    model: 'solid',
    primaryColor: '#66b500',
    secondaryColor: '#4D4D4D',
    tertiaryColor: '#000000',
    chestLogo: 'logo',
    leftArmLogo: 'logo',
    rightArmLogo: 'hamburger',
    editorCurrentlyOpen: 'defaultMenu'
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
        case 'EDITOR_CHANGE':
            return {
                ...state,
                editorCurrentlyOpen: action.menu
            }
        default:
            return state
    }
}