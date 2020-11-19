import axios from 'axios';
import Home from '@pages/Home';

export async function getStaticProps() {
  try {
    const posts = await axios.get('/posts');
    return {
      props: { posts: posts.data },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}

export default Home;
