import { Link, List, ListItem } from '@chakra-ui/react';

interface IBackMenuProps {
  menu: Array<{
    link: {
      link: string;
    };
    name: string;
  }>
}

export const BlackMenu = ({ menu = [] }: IBackMenuProps) => {
  return (
    <List
      alignItems={'center'}
      display={'flex'}
      bg={'black'}
      color={'white'}
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent={'center'}
      m={0}
      h={{ base: 'auto', lg: '280px' }}
      p={{ base: '80px 0', lg: '0' }}
      w={'100%'}
    >
      {menu.map((item, i) => (
        <ListItem
          key={i}
          display={'inline-block'}
          fontSize={40}
          fontWeight={500}
          p={{ base: '25px 0', lg: '0 40px' }}
          _notLast={{
            borderBottom: {
              base: '1px solid #565656',
              lg: 'none',
            },
            _after: {
              content: {
                base: '""',
                lg: '"|"',
              },
              position: 'relative',
              left: '40px',
            }
          }}
        >
          <Link
            href={item.link ? item.link.link : 'javascript: void(0);'}
            _hover={{
              textDecoration: 'underline'
            }}
          >{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
