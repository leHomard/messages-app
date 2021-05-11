import { generateId } from '../utils';
import { messagesData } from '../mocks/data';

export async function getMessages() {
  try {
    const response = await fetch('/messages');
    const messages = await response.json();
    return messages;
  } catch (error) {
    return new Promise.reject(error);
  }
}

export function postMessage(message) {
  console.log('🚀 ~ postMessage ~ message', message);
  const randomId = generateId();
  const newMessage = { id: randomId, content: message, isPrivate: false };
  return [...messagesData, newMessage];
}
