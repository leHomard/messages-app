import { memo } from 'react';
import { Box, Text, Tag } from '@chakra-ui/react';

export const Message = memo(({ content, isPrivate }) => {
  return (
    <Box
      w="100%"
      h="70px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      p="10px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Text fontSize="16px" color="black">
        {content}
      </Text>
      <Tag
        size="sm"
        colorScheme={isPrivate ? 'red' : 'teal'}
        borderRadius="full"
      >
        {isPrivate ? 'Private' : 'public'}
      </Tag>
    </Box>
  );
});
