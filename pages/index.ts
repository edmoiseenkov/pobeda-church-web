import axios from 'axios';
import { Home } from '@pages/home';

export async function getStaticProps() {
  try {
    const posts = await axios.get('/posts'); // TODO: remove
    const settings = await axios.get('/settings');
    const homePage = await axios.get('/home-page');
    return {
      props: {
        posts: posts.data,
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
