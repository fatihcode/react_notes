import { UPDATE_JOB } from "../actions/jobAction"

export default function jobReducer(state = [], { type, payload }) {

    switch (type) {
        case UPDATE_JOB:
            return payload

        default:
            return state
    }
}
