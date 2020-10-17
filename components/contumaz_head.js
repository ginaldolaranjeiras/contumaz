import Head from 'next/head';

function ContumazHead() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/contumaz_logo.svg"></link>
                <title>Contumaz</title>
                <meta property="og:title" content="Contumaz" key="title" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap"
                    rel="stylesheet">        
                </link>
            </Head>
        </div>
    );
}

export default  ContumazHead;
