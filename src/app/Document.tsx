import BaseDocument, { Html, Head, Main, NextScript } from 'next/document'

export class Document extends BaseDocument {
  static async getInitialProps(ctx) {
    const initialProps = await BaseDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html prefix="og: https://ogp.me/ns#">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
