import { useCallback, useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/layout';

import { MessagesList } from './components/MessagesList';
import { MessagesListSkeleton } from './components/MessagesListSkeleton';
import { MessageForm } from './components/MessageForm';
import { getMessages } from './api/api';
import { generateId } from './utils';

function App() {
  const [state, setState] = useState({
    status: 'idle',
    messages: [],
    error: '',
  });

  const { status, messages, error } = state;

  useEffect(() => {
    setState({ ...state, status: 'pending' });
    getMessages().then(
      messages => setState({ status: 'resolved', messages }),
      error => setState({ status: 'rejected', error })
    );
  }, []);

  const handleAddMessage = useCallback(
    message => {
      const randomId = generateId;
      const newMessage = { id: randomId, content: message, isPrivate: false };
      setState({ ...state, messages: [...messages, newMessage] });
    },
    [setState, state, messages]
  );

  if (error) return <Text>{error}</Text>;

  return (
    <Box m="0 auto" w="50%" h="100vh" p="2rem" mt="5rem">
      {status === 'pending' ? (
        <MessagesListSkeleton />
      ) : (
        <>
          <Text fontSize="5xl" mb="2rem" textAlign="center">
            Messages App
          </Text>
          <MessageForm addMessage={handleAddMessage} />
          <MessagesList messages={messages} />
        </>
      )}
    </Box>
  );
}

export default App;
