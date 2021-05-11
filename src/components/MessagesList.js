import { VStack } from '@chakra-ui/layout';
import { memo } from 'react';
import { Message } from './Message';

export const MessagesList = memo(({ messages }) => {
  return (
    <VStack>
      {messages.map(({ id, content, isPrivate }) => (
        <Message key={id} content={content} isPrivate={isPrivate} />
      ))}
    </VStack>
  );
});
