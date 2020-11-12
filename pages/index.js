import axios from "axios";
import Home from '../src/features/Home/Home';

export async function getStaticProps() {
  try{
    const posts = await axios.get('/posts')
    return {
      props: { posts: posts.data },
    };
  } catch(err) {
    return {
      props: {}
    }
  }
}

export default Home;
