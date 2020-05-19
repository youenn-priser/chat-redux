import { CHANNEL_SELECTED, MESSAGE_POSTED, FETCH_MESSAGES } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED: {
      return []; // Channel has changed, clearing the view
    }
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    default: {
      return state;
    }
  }
}
