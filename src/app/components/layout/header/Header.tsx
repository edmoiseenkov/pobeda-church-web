import {
  Flex,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { LogoIcon, MenuIcon } from '@assets/icons';
import { useSettings } from '@app/core/providers';

export const Header = () => {
  const settings = useSettings();
  return (
    <Flex
      alignItems={'center'}
      color={'white'}
      justifyContent={'space-between'}
      position={'absolute'}
      w={'100%'}
      paddingX={25}
      paddingY={5}
    >
      <LogoIcon width={20} height={20} />

      <List display={{ base: 'none', md: 'flex' }}>
        {(settings.menu || []).map((item, i) => (
          <ListItem key={i} mb={4}>
            <Link
              href={item.link.link}
              sx={{
                fontSize: 24,
                fontWeight: 500,
                mx: 4,
                _hover: {
                  borderBottom: '2px solid white',
                  textDecoration: 'none',
                }
              }}
            >{item.name}</Link>
          </ListItem>
        ))}
      </List>

      <Menu>
        <MenuButton
          variant="outline"
          as={IconButton}
          icon={<MenuIcon width={'30px'} height={'30px'} />}
          border={'none'}
          display={{ base: 'flex', md: 'none' }}
          aria-label="Menu"
          sx={{
            _hover: { bg: 'black' },
            _active: { bg: 'black' },
          }}
        />
        <MenuList
          bg={'black'}
          border={'none'}
          borderRadius={0}
          fontSize={'28px'}
          p={'10px 20px'}
          display={'flex'}
          flexDir={'column'}
        >
          {(settings.menu || []).map((item, i) => (
            <Link key={i} href={item.link.link} py={'10px'}>{item.name}</Link>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
};
