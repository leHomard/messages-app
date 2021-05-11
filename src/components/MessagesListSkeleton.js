import { Stack, Skeleton } from '@chakra-ui/react';

export function MessagesListSkeleton() {
  return (
    <Stack>
      <Skeleton height="70px" />
      <Skeleton height="70px" />
      <Skeleton height="70px" />
      <Skeleton height="70px" />
      <Skeleton height="70px" />
      <Skeleton height="70px" />
    </Stack>
  );
}
