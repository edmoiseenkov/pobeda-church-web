import getConfig from 'next/config';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useMemo } from 'react';

import { ISEOTags } from '@app/core/strapi';

export interface IHtmlHeadProps {
  title?: string;
  appendTitlePostfix?: boolean;
  seo: ISEOTags;
  children?: any;
}

const { publicRuntimeConfig } = getConfig();

const baseTitle = 'Церковь "Победа" г. Днепр';

export const HtmlHead = (
  {
    title,
    seo,
    appendTitlePostfix = true,
    children
  }: IHtmlHeadProps
) => {
  const router = useRouter();

  const compiledTitle = useMemo(() => {
    if (!title) {
      return baseTitle;
    }

    return `${title}${appendTitlePostfix ? ' - ' + baseTitle : ''}`;
  }, [title, appendTitlePostfix]);

  return (
    <Head>
      <title>{compiledTitle}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={compiledTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:url" content={publicRuntimeConfig.appDomain + router.asPath} />

      {children && {...children}}
    </Head>
  );
}
