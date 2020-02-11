export const initialState = {
    price: 300,
    view: 'front',
    model: 'solid',
    primaryColor: '#66b500',
    secondaryColor: '#4d4d4d',
    tertiaryColor: '#000000',
    chestLogo: {
        text: "Something that is vastly too long",
        fontFamily: "Fira Sans Condensed",
        fontSize: 24,
        outline: false
    },
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
        case 'FONT_SIZE_DOWN':
            return {
                ...state,
                chestLogo: {
                    ...state.chestLogo,
                    fontSize: state.chestLogo.fontSize - 1
                }
            }
        case 'FONT_SIZE_UP':
            return {
                ...state,
                chestLogo: {
                    ...state.chestLogo,
                    fontSize: state.chestLogo.fontSize + 1
                }
            }
        default:
            return state
    }
}