/* eslint-disable max-len */
import React from 'react';
import Document, { NextScript, Html, Main, Head } from 'next/document';

const scriptTxt = `
(function () {
  const { pathname } = window.location;
  const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname); 
  const base = document.createElement('base') 
  base.href = ipfsMatch ? ipfsMatch[0] : '/';
  document.head.append(base); 
})();
`;

const gaScriptText =`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-194369113-2');
`;

class MyDocument extends Document {
  getPreloadFontsLinks() {
    const fontSizes = [400, 600, 700, 800, 900];
    return fontSizes.map((size) => (
      <link
        rel="preload"
        key={size}
        as="font"
        href={`/fonts/inter-${size}.woff2`}
        type="font/woff2"
        crossOrigin=""
      />
    ));
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="/arkane-network/web3-arkane-provider.js"></script>
          <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-194369113-2"></script>
          <script dangerouslySetInnerHTML={{ __html: gaScriptText }} />
          {this.getPreloadFontsLinks()}
          {/* ipfs next.js fix */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-400.woff2") format("woff2"),
              url("./fonts/inter-400.woff") format("woff");
              font-weight: normal;
              font-style: normal;
            } 
          
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-600.woff2") format("woff2"),
              url("./fonts/inter-600.woff") format("woff");
              font-weight: 600;
              font-style: normal;
            }
            
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-700.woff2") format("woff2"),
                url("./fonts/inter-700.woff") format("woff");
              font-weight: 700;
              font-style: normal;
            }
          
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-800.woff2") format("woff2"),
                url("./fonts/inter-800.woff") format("woff");
              font-weight: 800;
              font-style: normal;
            }
            
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-900.woff2") format("woff2"),
                url("./fonts/inter-900.woff") format("woff");
              font-weight: 900;
              font-style: normal;
            }

            @font-face {
              font-family: "Internal Rainbows";
              src: url("./fonts/Internal Rainbows.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-Light.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 900;
            }
            @font-face {
              font-family: "Armata-Regular";
              src: url("./fonts/Armata-Regular.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Animosa";
              src: url("./fonts/Animosa-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "A DAY WITHOUT SUN";
              src: url("./fonts/A DAY WITHOUT SUN.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Abel";
              src: url("./fonts/Abel-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nella Sue Demo';
              src: url("./fonts/NellaSueDEMO.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken SemiBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken Bold.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Artisual Deco DEMO';
              src: url("./fonts/ArtisualDeco-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Mad Galaxy Demo';
              src: url("./fonts/MadGalaxyDemoRegular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Archie Websters';
              src: url("./fonts/Archie Websters.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rugrats';
              src: url("./fonts/RugratS.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Rugsnatcher DEMO';
              src: url("./fonts/rugsnatcher DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Beth Ellen';
              src: url("./fonts/Beth-Ellen-2.0.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Jockey One';
              src: url("./fonts/JockeyOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Jacques Francois';
              src: url("./fonts/JacquesFrancois-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Tera';
              src: url("./fonts/LexendTera-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Zetta';
              src: url("./fonts/LexendZetta-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Medula One';
              src: url("./fonts/MedulaOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aldrich';
              src: url("./fonts/Aldrich-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Cool Chaos';
              src: url("./fonts/Cool Chaos.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Heaven Wanders DEMO';
              src: url("./fonts/Heaven_Wanders_DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Comics Tricks';
              src: url("./fonts/Comics Tricks.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Habbo';
              src: url("./fonts/HabboFont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Ayuthaya';
              src: url("./fonts/ayuthaya-webfont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arima Madurai';
              src: url("./fonts/ArimaMadurai-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Mada';
              src: url("./fonts/Mada-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Mervale Script';
              src: url("./fonts/MervaleScript-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'PLAYPULL';
              src: url("./fonts/PLAYPULL_Demo.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Acme';
              src: url("./fonts/Acme-Regular.ttf");
              font-weight: 400;
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
