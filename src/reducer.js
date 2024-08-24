const initialState = {
    isEditing: false,
    showContainerPage: true
}

export const toggleEdit = () => ({
    type: 'TOGGLE_EDIT',
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_EDIT':
            return { ...state, isEditing: !state.isEditing }
        case 'SHOW_CONTAINER':
            return { ...state, showContainerPage: !state.showContainerPage }
        default:
            return state
    }
}