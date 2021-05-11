import { memo, useState } from 'react';
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';

export const MessageForm = memo(({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = e => setMessage(e.target.value);

  const handleAddMessage = () => {
    addMessage(message);
    setMessage('');
  };

  return (
    <InputGroup size="md" mb="2rem">
      <Input
        value={message}
        onChange={handleChange}
        pl="1rem"
        type="text"
        placeholder="Enter message"
      />
      <InputRightElement width="4.5rem">
        <Button mr="0.5rem" h="1.8rem" size="md" onClick={handleAddMessage}>
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
});
