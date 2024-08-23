const initialState = {
    isEditing: false,
}

export const toggleEdit = () => ({
    type: 'TOGGLE_EDIT',
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_EDIT':
            return { ...state, isEditing: !state.isEditing }
        default:
            return state
    }
}