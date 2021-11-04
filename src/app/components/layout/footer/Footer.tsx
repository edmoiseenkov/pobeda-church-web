import { Box, Button, Flex, Heading, Input, InputGroup, Link, List, ListItem, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

import { useSettings } from '@app/core/providers';
import { InstagramSVG, TelegramSVG, FacebookSVG, YoutubeSVG } from '@assets/icons';

import { secondaryMenu } from './constants';
import { LogoIcon } from './components';

export const Footer = () => {
  const settings = useSettings();

  const socials = useMemo(() => {
    return [
      { link: settings.youtube, icon: YoutubeSVG },
      { link: settings.instagram, icon: InstagramSVG },
      { link: settings.telegram, icon: TelegramSVG },
      { link: settings.facebook, icon: FacebookSVG },
    ]
  }, [settings]);

  return (
    <Flex
      as={'footer'}
      alignItems={'center'}
      backgroundColor={'black'}
      color={'white'}
      flexDir={'column'}
      mt={{ base: 50, lg: 150 }}
      width={'100%'}
      sx={{
        '--padding-v': '60px',
        '--padding-h': '96px',
      }}
    >
      <Flex
        alignItems={'center'}
        borderBottom={'2px solid #2B2B2B'}
        p={{ base: 15, lg: `var(--padding-v) 0` }}
        flexDir={{ base: 'column', lg: 'row' }}
        width={{ base: '100%', lg: `calc(100% - var(--padding-h))` }}
      >
        <Heading
          as={'h4'}
          fontSize={22}
          mb={{ base: 15, lg: 0 }}
          w={{ base: 'auto', lg: '30%' }}
        >Будте в центре событий</Heading>

        <Flex as={'form'} w={{ base: '100%', md: '70%' }}>
          <InputGroup size={'xxl'}>
            <Input type="email" placeholder="Отправьте вашу почту" variant={'outlineReversed'} />
            <Button variant={'solidReversed'}>Отправить</Button>
          </InputGroup>
        </Flex>
      </Flex>

      <Flex
        alignItems={'center'}
        borderBottom={'2px solid #2B2B2B'}
        flexDir={{ base: 'column', md: 'row' }}
        p={{ base: '15px', md: 'var(--padding-v) 0' }}
        w={{ base: '100%', md: `calc(100% - (var(--padding-v) * 2))` }}
      >
        <List textAlign={{ base: 'center', md: 'left' }} w={{ base: '100%', md: 'calc(100% / 3)' }}>
          {(settings.menu || []).map((item, i) => (
            <ListItem key={i} mb={4}>
              <Link
                href={item.link.link}
                sx={{
                  fontSize: 36,
                  fontWeight: 500,
                  _hover: {
                    borderBottom: '4px solid white',
                    textDecoration: 'none',
                  }
                }}
              >{item.name}</Link>
            </ListItem>
          ))}
        </List>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          m={{ base: '25px 0', md: '0' }}
          w={{ base: '100%', md: 'calc(100% / 3)' }}
        >
          <LogoIcon width={100} height={145} />
        </Flex>
        <Flex w={{ base: 'auto', md: 'calc(100% / 3)' }}>
          {secondaryMenu.map((menu, i) => (
            <Box key={i} w={'50%'} sx={{
              _last: {
                textAlign: {
                  base: 'right',
                  md: 'left'
                }
              }
            }}>
              <Heading as={'h5'} fontSize={20} mb={'32px'}>{menu.name}</Heading>
              <List>
                {menu.menu.map((subMenu, j) => (
                  <ListItem key={j} mb={'16px'}>
                    <Link
                      href={subMenu.link}
                      sx={{
                        _hover: {
                          borderBottom: '2px solid white',
                          textDecoration: 'none',
                        }
                      }}
                    >{subMenu.name}</Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Flex>
      </Flex>

      <Flex
        justifyContent={'space-between'}
        flexDir={{ base: 'column-reverse', md: 'row' }}
        p={{ base: 'calc(var(--padding-v) / 2) 0', md: 'var(--padding-v) var(--padding-v)' }}
        w={{ base: 'auto', md: '100%' }}
      >
        <Text color={'#474747'} textAlign={{ base: 'center', md: 'left' }}>
          Церковь "Победа" ©{new Date().getFullYear()}
        </Text>
        <List display={'flex'} mb={{ base: 4, md: 0 }}>
          {socials.map(({ link, icon: Icon }, i) => (
            <ListItem key={i} sx={{
              _notLast: {
                marginRight: 30,
              },
              _hover: {
                svg: {
                  opacity: 1
                }
              },
            }}>
              <Link href={link} target="_blank">
                <Icon opacity={0.8} width={32} height={32} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
}
