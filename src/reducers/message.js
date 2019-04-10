import * as types from '../constants/ActionType';
import * as Message from '../constants/Message';
var initialState = Message.MSG_WELCOM;
var message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
            break;
        default:
            return state;
            break;
    }
};
export default message;