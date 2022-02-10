import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { Component } from 'react';

export default class MyDocuments extends Document {
  render() {
    return(
        <Html>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@300;400;500&family=Raleway:wght@100;200;300;400;500;600&family=Staatliches&display=swap" rel="stylesheet"/> 
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}

