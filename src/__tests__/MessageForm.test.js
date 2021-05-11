import { MessageForm } from '../components/MessageForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should add a new message and assert the result', () => {
  let messages = [{ id: 1, content: 'first message', isPrivate: false }];
  const messagesAfterSubmit = [
    { id: 1, content: 'first message', isPrivate: false },
    { id: 2, content: 'second message', isPrivate: false },
  ];

  const handleSubmit = data =>
    (messages = [...messages, { id: 2, content: data, isPrivate: false }]);

  render(<MessageForm addMessage={handleSubmit} />);

  userEvent.type(
    screen.getByPlaceholderText(/Enter message/i),
    'second message'
  );
  userEvent.click(screen.getByRole('button', { name: /Send/i }));

  expect(messages).toEqual(messagesAfterSubmit);
});
