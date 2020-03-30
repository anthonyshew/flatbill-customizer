export const initialState = {
    step: 1,
    teamDetails: [{
        id: Date.now(),
        name: '',
        number: '',
        size: 'M',
    }],
    price: 49,
    view: 'back',
    model: 'solid',
    primaryColor: '#960001',
    secondaryColor: '#8abade',
    tertiaryColor: '#ffffff',
    chestLogo: {
        text: "Flatbill",
        fontFamily: "Galada",
        fontSize: 32,
        outline: true,
        shadow: true
    },
    number: {
        digit: 31,
        front: true,
        fontFamily: "Galada",
        fontSize: 32,
        outline: true,
        shadow: true
    },
    lastName: true,
    leftArmLogo: '/media/platypus.png',
    rightArmLogo: '/media/star.png',
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
        case 'STEP_CHANGE':
            return {
                ...state,
                step: action.step
            }
        case 'ROSTER_UPDATE':
            return {
                ...state,
                teamDetails: action.roster
            }
        case 'ROSTER_CONFIRM':
            return {
                ...state,
                teamDetails: action.roster
            }
        case 'EDITOR_CHANGE':
            return {
                ...state,
                editorCurrentlyOpen: action.menu
            }
        case 'MODEL_SELECT':
            return {
                ...state,
                model: action.model
            }
        case 'PRIMARY_COLOR_SELECT':
            return {
                ...state,
                primaryColor: action.primaryColor
            }
        case 'SECONDARY_COLOR_SELECT':
            return {
                ...state,
                secondaryColor: action.secondaryColor
            }
        case 'TERTIARY_COLOR_SELECT':
            return {
                ...state,
                tertiaryColor: action.tertiaryColor
            }
        case 'NAME_CHANGE':
            return {
                ...state,
                chestLogo: {
                    ...state.chestLogo,
                    text: action.teamName
                }
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
        case 'CHANGE_DISPLAY_NUMBER':
            return {
                ...state,
                number: {
                    ...state.number,
                    digit: action.number
                }
            }
        case 'NUMBER_SIZE_DOWN':
            return {
                ...state,
                number: {
                    ...state.number,
                    fontSize: state.number.fontSize - 1
                }
            }
        case 'NUMBER_SIZE_UP':
            return {
                ...state,
                number: {
                    ...state.number,
                    fontSize: state.number.fontSize + 1
                }
            }
        case 'TOGGLE_CHEST_OUTLINE':
            return {
                ...state,
                chestLogo: {
                    ...state.chestLogo,
                    outline: !state.chestLogo.outline
                }
            }
        case 'TOGGLE_CHEST_SHADOW':
            return {
                ...state,
                chestLogo: {
                    ...state.chestLogo,
                    shadow: !state.chestLogo.shadow
                }
            }
        case 'TOGGLE_NUMBER_OUTLINE':
            return {
                ...state,
                number: {
                    ...state.number,
                    outline: !state.number.outline
                }
            }
        case 'TOGGLE_NUMBER_SHADOW':
            return {
                ...state,
                number: {
                    ...state.number,
                    shadow: !state.number.shadow
                }
            }
        case 'LOGO_FONT_CHANGE':
            return {
                ...state,
                chestLogo: {
                    ...state.chestLogo,
                    fontFamily: action.newFont
                }
            }
        case 'NUMBER_FONT_CHANGE':
            return {
                ...state,
                number: {
                    ...state.number,
                    fontFamily: action.newFont
                }
            }
        case 'LEFT_SLEEVE_LOGO':
            return {
                ...state,
                leftArmLogo: action.url
            }
        case 'RIGHT_SLEEVE_LOGO':
            return {
                ...state,
                rightArmLogo: action.url
            }
        default:
            return state
    }
}