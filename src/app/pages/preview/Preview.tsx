import Head from 'next/head'

export const Preview = () => {
  return (
    <>
      <Head>
        <title>Церковь Победа, г. Днепр</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="/preview/style.css" rel="stylesheet" type="text/css" />
      </Head>
      <div className="flex-center position-ref full-height">
        <div className="content">
          <div className="logo">
            <img src="/preview/logo.png" alt="" style={{ margin: 'auto' }} />
          </div>

          <h3>Ждем Вас</h3>
          <h2>Каждое Воскресенье в 11:00</h2>
          <p>ул. Академика Белолюбского (Краснозаводская), 14</p>

          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/pobedachurchdp" target="_blank">
                <i className="icon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pobeda.dp/" target="_blank">
                <i className="icon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
