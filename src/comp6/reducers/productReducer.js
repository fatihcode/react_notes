import { UPDATE_PRODUCT, ADD_PRODUCT } from "../actions/productAction"


export default function productReducer(state="", action) {

    switch (action.type) {

        case UPDATE_PRODUCT:
            return action.payload.product

        default:
            return state
    }
}
