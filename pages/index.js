import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M37P5XS');`}}></script>
      <title>Home - Érico de Souza Loewe</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="Érico de Souza Loewe" />
      <meta name="description" content="A page about Érico de Souza Loewe" />
      <meta name="keywords" content="Érico,Loewe,About,Me,HTML,CSS,JavaScript" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120218088-1"></script>
      <script>

      </script>
    </Head>

    <main className="container home">
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M37P5XS" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      <div className="profile-picture"><img src="/profile.jpg" alt="My profile photo" /></div>
      <div className="profile-info">
        <h1 className="name">Érico de Souza Loewe</h1>
        <p className="description">Welcome to my website</p>
        <div className="links"><a href="https://github.com/ericoloewe" title="Github link"><span><svg width="42" height="42"
          viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32.9933 12.2857C21.6362 12.2857 12.4219 21.5 12.4219 32.8571C12.4219 41.9375 18.3147 49.6518 26.4844 52.3839C27.529 52.5714 27.904 51.9286 27.904 51.3929C27.904 50.8839 27.8772 49.2768 27.8772 47.5625C27.8772 47.5625 22.1451 48.7946 20.9397 45.125C20.9397 45.125 20.0022 42.7411 18.6629 42.125C18.6629 42.125 16.7879 40.8393 18.7969 40.8661C18.7969 40.8661 20.8326 41.0268 21.9576 42.9821C23.7522 46.1429 26.7522 45.2321 27.9308 44.6964C28.1183 43.3839 28.654 42.4732 29.2433 41.9375C24.6629 41.4286 19.8683 39.6607 19.8683 31.7857C19.8683 29.5357 20.6719 27.7143 21.9844 26.2679C21.7701 25.7321 21.0737 23.6429 22.1987 20.8036C23.9129 20.2679 27.8504 22.9196 27.8504 22.9196C29.4844 22.4643 31.2522 22.2232 32.9933 22.2232C34.7344 22.2232 36.5022 22.4643 38.1362 22.9196C38.1362 22.9196 42.0737 20.2679 43.7879 20.8036C44.9129 23.6429 44.2165 25.7321 44.0022 26.2679C45.3147 27.7143 46.1183 29.5357 46.1183 31.7857C46.1183 39.6875 41.2969 41.4286 36.7165 41.9375C37.4665 42.5804 38.1094 43.8125 38.1094 45.7411C38.1094 48.5 38.0826 50.7232 38.0826 51.3929C38.0826 51.9286 38.4576 52.5714 39.5022 52.3839C47.6719 49.6518 53.5647 41.9375 53.5647 32.8571C53.5647 21.5 44.3504 12.2857 32.9933 12.2857ZM20.2165 41.8304C20.1629 41.9375 20.0022 41.9643 19.8683 41.8839C19.7076 41.8036 19.6272 41.6696 19.6808 41.5625C19.7344 41.4821 19.8683 41.4554 20.029 41.5089C20.1897 41.5893 20.2701 41.7232 20.2165 41.8304ZM21.0469 42.7411C20.9397 42.8482 20.7522 42.7946 20.6183 42.6607C20.4844 42.5 20.4576 42.3125 20.5647 42.2321C20.6719 42.125 20.8594 42.1786 20.9933 42.3125C21.1272 42.4732 21.154 42.6607 21.0469 42.7411ZM21.8504 43.9464C21.7433 44.0268 21.529 43.9464 21.3951 43.7589C21.2612 43.5714 21.2612 43.3571 21.3951 43.2768C21.529 43.1696 21.7433 43.25 21.8504 43.4375C21.9844 43.625 21.9844 43.8393 21.8504 43.9464ZM22.9754 45.0714C22.8683 45.2054 22.6272 45.1786 22.4397 44.9911C22.2522 44.8304 22.1987 44.5893 22.3326 44.4821C22.4397 44.3482 22.6808 44.375 22.8683 44.5625C23.029 44.7232 23.0826 44.9643 22.9754 45.0714ZM24.5022 45.7411C24.4487 45.9018 24.2076 45.9821 23.9933 45.9018C23.7522 45.8482 23.5915 45.6607 23.6451 45.5C23.6987 45.3393 23.9397 45.2589 24.154 45.3125C24.3951 45.3929 24.5558 45.5804 24.5022 45.7411ZM26.1897 45.875C26.1897 46.0357 26.0022 46.1696 25.7612 46.1696C25.4933 46.1964 25.3058 46.0625 25.3058 45.875C25.3058 45.7143 25.4933 45.5804 25.7344 45.5804C25.9754 45.5536 26.1897 45.6875 26.1897 45.875ZM27.7433 45.6071C27.7701 45.7679 27.6094 45.9286 27.3683 45.9821C27.1272 46.0357 26.9129 45.9286 26.8862 45.7679C26.8594 45.5804 27.0201 45.4196 27.2612 45.3661C27.5022 45.3393 27.7165 45.4464 27.7433 45.6071Z"
            transform="translate(-12 -11.3555)" fill="black" />
        </svg>
        </span></a><a href="https://www.linkedin.com/in/érico-loewe-2302aba0" title="Linkedin link"><span><svg
          width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.7701 46.7321V28.1429H24.9576V46.7321H18.7701ZM25.3594 22.4107C25.3594 24.1786 24.0201 25.625 21.8504 25.625H21.8237C19.7344 25.625 18.3951 24.1786 18.3951 22.4107C18.3951 20.5893 19.7879 19.1964 21.904 19.1964C24.0201 19.1964 25.3326 20.5893 25.3594 22.4107ZM41.029 46.7321V36.7946C41.029 34.2768 40.1451 32.5893 37.9219 32.5893C36.2076 32.5893 35.1897 33.7411 34.7344 34.8393C34.5737 35.2411 34.5469 35.8036 34.5469 36.3393V46.7321H28.3594C28.4397 29.8839 28.3594 28.1429 28.3594 28.1429H34.5469V30.8482H34.4933C35.2969 29.5625 36.7701 27.7143 40.0915 27.7143C44.1629 27.7143 47.2165 30.3661 47.2165 36.0714V46.7321H41.029ZM53.5647 20C53.5647 15.7411 50.1094 12.2857 45.8504 12.2857H20.1362C15.8772 12.2857 12.4219 15.7411 12.4219 20V45.7143C12.4219 49.9732 15.8772 53.4286 20.1362 53.4286H45.8504C50.1094 53.4286 53.5647 49.9732 53.5647 45.7143V20Z"
            transform="translate(-12 -11.3555)" fill="black" />
        </svg>
        </span></a><a href="mailto:ericoloewe@gmail.com" title="Email link"><span><svg width="48" height="39"
          viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M57 27.875C56.1964 28.7589 55.2857 29.5357 54.3214 30.2054C49.8482 33.2321 45.3482 36.2857 40.9821 39.4464C38.7321 41.1071 35.9464 43.1429 33.0268 43.1429H33H32.9732C30.0536 43.1429 27.2679 41.1071 25.0179 39.4464C20.6518 36.2589 16.1518 33.2321 11.7054 30.2054C10.7143 29.5357 9.80357 28.7589 9 27.875V49.1429C9 51.5 10.9286 53.4286 13.2857 53.4286H52.7143C55.0714 53.4286 57 51.5 57 49.1429V27.875ZM57 20C57 17.6429 55.0446 15.7143 52.7143 15.7143H13.2857C10.4196 15.7143 9 17.9643 9 20.5893C9 23.0268 11.7054 26.0536 13.6071 27.3393C17.7589 30.2321 21.9643 33.125 26.1161 36.0446C27.8571 37.25 30.8036 39.7143 32.9732 39.7143H33H33.0268C35.1964 39.7143 38.1429 37.25 39.8839 36.0446C44.0357 33.125 48.2411 30.2321 52.4196 27.3393C54.7768 25.7054 57 23 57 20Z"
            transform="translate(-9 -15.2639)" fill="black" />
        </svg>
        </span></a><a href="https://www.instagram.com/ericoloewe/" title="Instagram link"><span><svg width="42"
          height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M39.8504 32.8571C39.8504 36.6339 36.7701 39.7143 32.9933 39.7143C29.2165 39.7143 26.1362 36.6339 26.1362 32.8571C26.1362 29.0804 29.2165 26 32.9933 26C36.7701 26 39.8504 29.0804 39.8504 32.8571ZM43.5469 32.8571C43.5469 27.0179 38.8326 22.3036 32.9933 22.3036C27.154 22.3036 22.4397 27.0179 22.4397 32.8571C22.4397 38.6964 27.154 43.4107 32.9933 43.4107C38.8326 43.4107 43.5469 38.6964 43.5469 32.8571ZM46.4397 21.875C46.4397 20.5089 45.3415 19.4107 43.9754 19.4107C42.6094 19.4107 41.5112 20.5089 41.5112 21.875C41.5112 23.2411 42.6094 24.3393 43.9754 24.3393C45.3415 24.3393 46.4397 23.2411 46.4397 21.875ZM32.9933 15.9821C35.9933 15.9821 42.4219 15.7411 45.1272 16.8125C46.0647 17.1875 46.7612 17.6429 47.4844 18.3661C48.2076 19.0893 48.6629 19.7857 49.0379 20.7232C50.1094 23.4286 49.8683 29.8571 49.8683 32.8571C49.8683 35.8571 50.1094 42.2857 49.0379 44.9911C48.6629 45.9286 48.2076 46.625 47.4844 47.3482C46.7612 48.0714 46.0647 48.5268 45.1272 48.9018C42.4219 49.9732 35.9933 49.7321 32.9933 49.7321C29.9933 49.7321 23.5647 49.9732 20.8594 48.9018C19.9219 48.5268 19.2254 48.0714 18.5022 47.3482C17.779 46.625 17.3237 45.9286 16.9487 44.9911C15.8772 42.2857 16.1183 35.8571 16.1183 32.8571C16.1183 29.8571 15.8772 23.4286 16.9487 20.7232C17.3237 19.7857 17.779 19.0893 18.5022 18.3661C19.2254 17.6429 19.9219 17.1875 20.8594 16.8125C23.5647 15.7411 29.9933 15.9821 32.9933 15.9821ZM53.5647 32.8571C53.5647 30.0179 53.5915 27.2054 53.4308 24.3661C53.2701 21.0714 52.5201 18.1518 50.1094 15.7411C47.6987 13.3304 44.779 12.5804 41.4844 12.4196C38.6451 12.2589 35.8326 12.2857 32.9933 12.2857C30.154 12.2857 27.3415 12.2589 24.5022 12.4196C21.2076 12.5804 18.2879 13.3304 15.8772 15.7411C13.4665 18.1518 12.7165 21.0714 12.5558 24.3661C12.3951 27.2054 12.4219 30.0179 12.4219 32.8571C12.4219 35.6964 12.3951 38.5089 12.5558 41.3482C12.7165 44.6429 13.4665 47.5625 15.8772 49.9732C18.2879 52.3839 21.2076 53.1339 24.5022 53.2946C27.3415 53.4554 30.154 53.4286 32.9933 53.4286C35.8326 53.4286 38.6451 53.4554 41.4844 53.2946C44.779 53.1339 47.6987 52.3839 50.1094 49.9732C52.5201 47.5625 53.2701 44.6429 53.4308 41.3482C53.5915 38.5089 53.5647 35.6964 53.5647 32.8571Z"
            transform="translate(-12 -12.2639)" fill="black" />
        </svg>
        </span></a><a href="https://www.facebook.com/erico.souzaloewe" title="Facebook link"><span><svg width="24"
          height="46" viewBox="0 0 24 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.9766 9.17857C44.2533 9.07143 41.7623 8.85714 38.8694 8.85714C32.8158 8.85714 28.6641 12.5536 28.6641 19.3304V25.1696H21.8337V33.0982H28.6641V53.4286H36.8605V33.0982H43.6641L44.7087 25.1696H36.8605V20.1071C36.8605 17.8304 37.4766 16.25 40.7712 16.25H44.9766V9.17857Z"
            transform="translate(-21 -8.26385)" fill="black" />
        </svg>
        </span></a></div>
      </div>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .home,
      .home>.profile-picture {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
      }
      
      .home {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
      }
      
      .home>.profile-picture {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 20px
      }
      
      @media (min-width:1024px) {
        .home>.profile-picture {
          margin-top: 62px
        }
      }
      
      .home .profile-info,
      .home>.profile-picture img {
        -webkit-box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, .2);
        box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, .2)
      }
      
      .home>.profile-picture img {
        width: 240px;
        height: 240px;
        border-radius: 50%;
        border: 4px solid #f2f2f2
      }
      
      .home .profile-info {
        background: #f2f2f2;
        margin: 50px auto 0
      }
      
      @media (min-width:1024px) {
        .home .profile-info {
          margin: 100px auto 50px
        }
      }
      
      .home .profile-info .name {
        background: #18628c;
        color: #fff;
        font-size: 26px;
        margin-top: 0;
        padding: 30px 10px 5px;
      }
      
      @media (min-width:1024px) {
        .home .profile-info .name {
          font-size: 28px;
          padding: 50px 20px 5px
        }
      }
      
      .home .profile-info .description {
        padding: 10px
      }
      
      @media (min-width:1024px) {
        .home .profile-info .description {
          padding: 10px 20px
        }
      }
      
      .home .profile-info .links {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 10px
      }
      
      @media (min-width:1024px) {
        .home .profile-info .links {
          padding: 10px 30px
        }
      }
      
      @media (min-width:768px) {
        .home .profile-info {
          min-width: 400px
        }
      }
      
      @media (min-width:1024px) {
        .home .profile-info {
          min-width: 500px
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      @-webkit-keyframes fade-in {
        0% {
          opacity: 0;
          visibility: hidden
        }
        to {
          opacity: 1;
          visibility: visible
        }
      }
      
      @keyframes fade-in {
        0% {
          opacity: 0;
          visibility: hidden
        }
        to {
          opacity: 1;
          visibility: visible
        }
      }
      
      @-webkit-keyframes progress-bar-stripes {
        0% {
          background-position: 3rem 0
        }
        to {
          background-position: 0 0
        }
      }
      
      @keyframes progress-bar-stripes {
        0% {
          background-position: 3rem 0
        }
        to {
          background-position: 0 0
        }
      }
      
      body {
        overflow-x: hidden;
        font-size: 14px;
        background: url(/home-background.jpg);
        background-size: cover
      }
      
      ul {
        list-style: none
      }
      
      a {
        color: #333;
        text-decoration: none
      }
      
      body,
      html {
        height: 100%
      }
    `}</style>
  </div>
)

export default Home
