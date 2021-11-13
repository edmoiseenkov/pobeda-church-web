import { useMediaQuery as useChakraMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string | string[]) => {
  const [mounted, setMounted] = useState(false);

  const result = useChakraMediaQuery(query);

  useEffect(()=>{
    setMounted(true);
  },[]);

  return mounted ? result : new Array(result.length).fill(false);
};
