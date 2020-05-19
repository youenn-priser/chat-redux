// TODO: add and export your own actions
const BASE_URL = "https://wagon-chat.herokuapp.com";

export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const CHANNEL_SELECTED = "CHANNEL_SELECTED";
export const MESSAGE_POSTED = "MESSAGE_POSTED";

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then((messages) => messages.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise, // To be resolved by 'redux-promise'
  };
}
export function selectChannel(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel,
  };
}
export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const message = { author, content };
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  }).then((response) => response.json());
  return {
    type: MESSAGE_POSTED,
    payload: promise,
  };
}
