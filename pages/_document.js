import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';
import theme from '../src/Theme';
import {UI_CONTEXT_ROOT} from '../src/GlobalConfig';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <style jsx global>
                    {`
 
                        @font-face {
                            font-family: 'Open Sans';
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-light-webfont.eot');
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-light-webfont.eot?#iefix') format('embedded-opentype'),
                                url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-light-webfont.woff2') format('woff2'),
                                url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-light-webfont.woff') format('woff'),
                                url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-light-webfont.ttf') format('truetype');
                            font-weight: 300;
                            font-style: normal;
                            font-display: swap;

                        }
                        @font-face {
                            font-family: 'Open Sans';
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-regular-webfont.eot');
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-regular-webfont.eot?#iefix') format('embedded-opentype'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-regular-webfont.woff2') format('woff2'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-regular-webfont.woff') format('woff'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-regular-webfont.ttf') format('truetype');
                            font-weight: 400;
                            font-style: normal;
                            font-display: swap;

                        }
                        @font-face {
                            font-family: 'Open Sans';
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-semibold-webfont.eot');
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-semibold-webfont.eot?#iefix') format('embedded-opentype'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-semibold-webfont.woff2') format('woff2'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-semibold-webfont.woff') format('woff'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-semibold-webfont.ttf') format('truetype');
                            font-weight: 600;
                            font-style: normal;
                            font-display: swap;

                        }
                        @font-face {
                            font-family: 'Open Sans';
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-bold-webfont.eot');
                            src: url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-bold-webfont.eot?#iefix') format('embedded-opentype'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-bold-webfont.woff2') format('woff2'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-bold-webfont.woff') format('woff'),
                                 url('${UI_CONTEXT_ROOT}/fonts/Open_Sans/opensans-bold-webfont.ttf') format('truetype');
                            font-weight: 700;
                            font-style: normal;
                            font-display: swap;

                        }

                    `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
  
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
  
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  };