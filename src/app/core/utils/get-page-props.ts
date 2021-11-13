import { GetStaticProps, GetStaticPropsResult } from 'next';
import axios from 'axios';

export function getPageProps<T>(func: (context) => (Promise<GetStaticPropsResult<T>> | GetStaticPropsResult<T>)): GetStaticProps<{ props: T; settings: any; } | T>  {
  return async (context) => {
    const response = (await func(context)) as GetStaticPropsResult<T>;

    if (response.hasOwnProperty('props')) {
      const { props } = response as { props: T };
      try {
        const settings = (await axios.get('/settings')).data;
        return {
          ...response,
          props: {
            props: {...props},
            settings: settings,
          }
        };
      } catch (e) {}
    }

    return response;
  }
}
