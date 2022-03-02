export default function productReducer(state, action) {
    // console.log(state, action);

    if (action.type == 'changeTheState') {
        return action.payload
    }
    return 'Old State'
}
