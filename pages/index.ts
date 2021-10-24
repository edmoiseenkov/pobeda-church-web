import axios from 'axios';
import { Home } from '@app/pages';

export async function getStaticProps() {
  try {
    const settings = await axios.get('/settings');
    const homePage = await axios.get('/home-page');
    return {
      props: {
        settings: settings.data,
        homePage: homePage.data,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}

export default Home;
