import { rest } from 'msw';
import { messagesData } from './data';

export const handlers = [
  rest.get('/messages', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.body(JSON.stringify(messagesData))
    );
  }),
];
