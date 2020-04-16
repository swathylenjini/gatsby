import {actionTypes} from './pieActions'
import {generateRandomValues} from '../../../src/utils/randomDataGenerator'

 const pieData = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_DATA:
            return generateRandomValues()
        default:
            return state
    }
}
export default pieData