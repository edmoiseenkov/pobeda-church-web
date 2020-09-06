import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import menuStyles from '../styles/Menu.module.scss'
import sundayService from '../styles/SundayService.module.scss'
import Intro from '../components/Intro';
import PostPreview from '../components/PostPreview';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />

      <div className={menuStyles.menu}>
        <ul>
          <li>
            <a href="#">Церковь</a>
          </li>
          <li>
            <a href="#">Музыка</a>
          </li>
          <li>
            <a href="#">Дети</a>
          </li>
          <li>
            <a href="#">Молоджное</a>
          </li>
        </ul>
      </div>

      <div className={sundayService.sundayService}>
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
  )
}
