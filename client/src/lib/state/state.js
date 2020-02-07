export const initialState = {
    price: 300,
    view: 'front',
    model: 'solid',
    primaryColor: '#66b500',
    secondaryColor: '#4d4d4d',
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
        case 'MODEL_SELECT':
            return {
                ...state,
                editorCurrentlyOpen: action.menu,
                model: action.model
            }
        case 'PRIMARY_COLOR_SELECT':
            return {
                ...state,
                editorCurrentlyOpen: action.menu,
                primaryColor: action.primaryColor
            }
        case 'SECONDARY_COLOR_SELECT':
            return {
                ...state,
                editorCurrentlyOpen: action.menu,
                secondaryColor: action.secondaryColor
            }
        case 'TERTIARY_COLOR_SELECT':
            return {
                ...state,
                editorCurrentlyOpen: action.menu,
                tertiaryColor: action.tertiaryColor
            }
        default:
            return state
    }
}