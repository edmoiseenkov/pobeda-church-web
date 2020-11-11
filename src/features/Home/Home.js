import Head from 'next/head';
import styles from './Home.module.scss';
import PageIntro from '../../shared/PageIntro/PageIntro';
import PostPreview from '../../shared/PostPreview/PostPreview';
import { Button, buttonVariants } from '../../shared/Button/Button';
import { ReactComponent as MapIcon } from './../../assets/icons/Maps.svg';
// import { AskQuestion } from '../../shared/AskQuestion/AskQuestion';
import Footer from '../../shared/Footer/Footer';

const menuItems = [
  { name: 'Церковь', link: '#' },
  { name: 'Музыка', link: '#' },
  { name: 'Дети', link: '#' },
  { name: 'Молоджное', link: '#' },
]

const Menu = () => {
    return (
        <ul className={styles.menu}>
            {menuItems.map((item, i) => <li key={i}><a href={item.link}>{item.name}</a></li>)}
        </ul>
    );
};

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Церковь "Победа" г. Днепр</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageIntro />

            <Menu />

            <div className={styles.sundayService}>
                <div>
                    <h2>Воскресное служение</h2>
                    <p>в 11:00, добро пожаловать</p>
                    <Button
                        variant={buttonVariants.white}
                        icon={() => (<MapIcon />)}
                    >Посмотреть на карте</Button>
                </div>
            </div>

            <PostPreview
                title={'Церковь'}
                text={'Наша Главная задача — быть «смоковницей», приносящей плод. Наша цель — спасти грешников в нашем гopoде и войти в небеса, наше оружие в борьбе с дьяволом — пост, молитва и проповедь Благой Вести. Мы уповаем на нерушимое Слово Божье и готовы идти до конца в вере нашему Спасителю.'}
                buttonText={'Читать больше'}
                buttonLink={'#'}
                img={'/images/church-about-preview.png'}
            />

            {/*<AskQuestion />*/}

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
                buttonVariant={buttonVariants.outline}
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

            <Footer />
        </div>
    );
};
