import { useMemo } from 'react';
import styles from './Footer.module.scss'
import { Button, buttonVariants } from '../Button/Button';
import { ReactComponent as InstaIcon } from './../../assets/icons/Insta.svg';
import { ReactComponent as TelegramIcon } from './../../assets/icons/Telegram.svg';
import { ReactComponent as FacebookIcon } from './../../assets/icons/Facebook.svg';
import { ReactComponent as ChurchLogoIcon } from './../../assets/icons/Logo.svg';

export default function Footer() {
    const year = useMemo(() => {
        return (new Date()).getFullYear();
    }, []);

    const mainMenu = useMemo(() => {
        return [
            { name: 'Главная', link: '' },
            { name: 'Альбомы', link: '' },
            { name: 'Служения', link: '' },
            { name: 'Помощь', link: '' },
        ];
    }, []);

    const subMenus = useMemo(() => {
        return [
            {
                name: 'Служения',
                menu: [
                    { name: 'Молитвенное', link: '#' },
                    { name: 'Поддержка', link: '#' },
                    { name: 'Детский дом', link: '#' },
                    { name: 'Молодежное служение', link: '#' },
                ]
            },
            {
                name: 'Контакты',
                menu: [
                    { name: 'Телеграмм', link: '#' },
                    { name: 'Инстаграм', link: '#' },
                    { name: 'Адресс', link: '#' },
                    { name: 'Почта', link: '#' },
                ]
            },
        ];
    }, []);

    const socials = useMemo(() => {
        return [
            { link: 'https://www.instagram.com/pobeda.dp/', component: InstaIcon },
            { link: 'https://t.me/pobedachurch', component: TelegramIcon },
            { link: 'https://www.facebook.com/pobedachurchdp', component: FacebookIcon },
        ];
    }, []);

    return (
        <footer className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <h4>Будте в центре событий</h4>
                <form>
                    <input type="text" placeholder={'Отправьте вашу почту'} />
                    <Button variant={buttonVariants.white}>Отправить</Button>
                </form>
            </div>
            <div className={styles.menus}>
                <ul className={styles.mainMenu}>
                    {mainMenu.map((item, i) => (
                        <li key={i}><a href={item.link}>{item.name}</a></li>
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
                                    <li key={j}><a href={subMenu.link}>{subMenu.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.copyright}>
                <p className={styles.copyrightText}>Церковь "Победа" ©{year}</p>
                <ul className={styles.copyrightSocials}>
                    {socials.map(({ link, component: IconComponent }, i) => (
                        <li key={i}>
                            <a href={link} target={'_blank'}><IconComponent /></a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};
