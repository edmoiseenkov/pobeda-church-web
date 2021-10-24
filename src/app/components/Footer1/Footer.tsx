import { ReactComponent as InstaIcon } from '@assets/icons/Insta1.svg';
import { ReactComponent as TelegramIcon } from '@assets/icons/Telegram1.svg';
import { ReactComponent as FacebookIcon } from '@assets/icons/Facebook1.svg';
import { ReactComponent as ChurchLogoIcon } from '@assets/icons/Logo1.svg';

import { Button, buttonVariants } from '@components';

import styles from './Footer.module.scss';
import { useMemo } from 'react';

const mainMenu = [
  { name: 'Главная', link: '' },
  { name: 'Альбомы', link: '' },
  { name: 'Служения', link: '' },
  { name: 'Помощь', link: '' },
];

const subMenus = [
  {
    name: 'Служения',
    menu: [
      { name: 'Молитвенное', link: '#' },
      { name: 'Поддержка', link: '#' },
      { name: 'Детский дом', link: '#' },
      { name: 'Молодежное служение', link: '#' },
    ],
  },
  {
    name: 'Контакты',
    menu: [
      { name: 'Телеграмм', link: '#' },
      { name: 'Инстаграм', link: '#' },
      { name: 'Адресс', link: '#' },
      { name: 'Почта', link: '#' },
    ],
  },
];

export const Footer = ({ settings }) => {
  const socials = useMemo(() => {
    return [
      { link: settings.instagram, component: InstaIcon },
      { link: settings.telegram, component: TelegramIcon },
      { link: settings.facebook, component: FacebookIcon },
      { link: settings.youtube, component: FacebookIcon }, // TODO: add youtube icon
    ]
  }, []);


  return (
    <footer className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h4>Будте в центре событий</h4>
        <form>
          <input type="email" placeholder="Отправьте вашу почту" />
          <Button variant={buttonVariants.white}>Отправить</Button>
        </form>
      </div>
      <div className={styles.menus}>
        <ul className={styles.mainMenu}>
          {mainMenu.map((item, i) => (
            <li key={i}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className={styles.churchLogo}>
          <ChurchLogoIcon />
        </div>
        <div className={styles.subMenus}>
          {subMenus.map((menu, i) => (
            <div className={styles.subMenuWrapper} key={i}>
              <h5 className={styles.subMenuTitle}>{menu.name}</h5>
              <ul className={styles.subMenu}>
                {menu.menu.map((subMenu, j) => (
                  <li key={j}>
                    <a href={subMenu.link}>{subMenu.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyrightText}>Церковь "Победа" ©{new Date().getFullYear()}</p>
        <ul className={styles.copyrightSocials}>
          {socials.map(({ link, component: IconComponent }, i) => (
            <li key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <IconComponent />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}