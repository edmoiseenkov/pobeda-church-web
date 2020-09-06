
import { useMemo } from 'react';
import Head from 'next/head';
import styles from './Home.module.scss';
import PageIntro from '../../shared/PageIntro/PageIntro';
import PostPreview from '../../shared/PostPreview/PostPreview';

const Menu = ({ menuItems = [] }) => {
    return (
        <ul className={styles.menu}>
            {menuItems.map((item, i) => <li key={i}><a href={item.link}>{item.name}</a></li>)}
        </ul>
    );
};

export default function Home() {
    const menuItems = useMemo(() => [
        { name: 'Церковь', link: '#' },
        { name: 'Музыка', link: '#' },
        { name: 'Дети', link: '#' },
        { name: 'Молоджное', link: '#' },
    ], []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageIntro />

            <Menu menuItems={menuItems} />

            <div className={styles.sundayService}>
                <div>
                    <h2>Воскресное служение</h2>
                    <p>в 11:00, добро пожаловать</p>
                    <button>Посмотреть на карте</button>
                </div>
            </div>

            <PostPreview
                title={'Церковь'}
                text={'Наша Главная задача — быть «смоковницей», приносящей плод. Наша цель — спасти грешников в нашем гopoде и войти в небеса, наше оружие в борьбе с дьяволом — пост, молитва и проповедь Благой Вести. Мы уповаем на нерушимое Слово Божье и готовы идти до конца в вере нашему Спасителю.'}
                buttonText={'Читать больше'}
                buttonLink={'#'}
                img={'/images/church-about-preview.png'}
            />

            <PostPreview
                title={'Музыка'}
                text={'Наша Главная задача — быть «смоковницей», приносящей плод. Наша цель — спасти грешников в нашем гopoде и войти в небеса, наше оружие в борьбе с дьяволом — пост, молитва и проповедь Благой Вести. Мы уповаем на нерушимое Слово Божье и готовы идти до конца в вере нашему Спасителю.'}
                buttonText={'Слушать песни'}
                buttonLink={'#'}
                img={'/images/music-preview.png'}
                isReverse={true}
                bgColor={'#F5F9F0'}
            />

            <PostPreview
                title={'Дети'}
                text={'Наша Главная задача — быть «смоковницей», приносящей плод. Наша цель — спасти грешников в нашем гopoде и войти в небеса, наше оружие в борьбе с дьяволом — пост, молитва и проповедь Благой Вести. Мы уповаем на нерушимое Слово Божье и готовы идти до конца в вере нашему Спасителю.'}
                buttonText={'Читать больше'}
                buttonLink={'#'}
                img={'/images/children-preview.png'}
            />

            <PostPreview
                title={'Молодежное служение'}
                text={'Наша Главная задача — быть «смоковницей», приносящей плод. Наша цель — спасти грешников в нашем гopoде и войти в небеса, наше оружие в борьбе с дьяволом — пост, молитва и проповедь Благой Вести. Мы уповаем на нерушимое Слово Божье и готовы идти до конца в вере нашему Спасителю.'}
                buttonText={'Читать больше'}
                buttonLink={'#'}
                img={'/images/youth-preview.png'}
                isReverse={true}
                bgColor={'#FDF4EF'}
            />
        </div>
    );
};