import React, {useState} from "react";
import Script from "next/script";
import {createSwiperReviews, createSwiperQuestions} from '@/lib/sliderConfig';
import delve from "dlv";
import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import ButtonMenu from '../components/buttonMenu';
import Content from '../components/content';
import {getStrapiData} from '@/lib/api/apiSer';

export async function getStaticProps() {
    try {
        const {preview} = await getStrapiData();
        return {
            props: {...preview},
            revalidate: 60,
        }
    } catch (error) {
        return {
            props: { preview: null },
            revalidate: 60,
        };
    }
}

export default function Home({homepage, services, reviews}) {
    const header = delve(homepage, "data.attributes.header");
    const footer = delve(homepage, "data.attributes.footer");
    const body = delve(homepage, "data.attributes.body");
    const widgetOrder = delve(homepage, "data.attributes.widgetOrder");
    const widgetReview = delve(homepage, "data.attributes.widgetReview");

    const [isSentOrder, setIsSentOrder] = useState(false);
    return (
        <>
            <Head>
                <title>Клининговая компания Добрая Фея</title>
                <meta name="description" content="Клининговая компания Добрая Фея"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="клининговая компания Туапсе, уборка квартир, уборка офисов, уборка после арендаторов, обработка, поверхность, полировка, мебель"/>
                <meta name="description" content="Клининговая компания «Добрая Фея» - ⭐Профессиональные услуги уборки в Туапсе и Туапсинском районе - ✅Гарантия качества - ✅100% чистота!"/>
                <meta name="robots" content="index,follow"/>
                <meta name="og:title" content="Сервис заказа уборки Добрая Фея"/>
                <meta name="og:site" content="https://good-fairy.ru/"/>
                <meta name="og:description" content="Сервис заказа уборки Добрая Фея - верный помощник в решении бытовых вопросов и уборки дома."/>
                <meta name="og:type" content="website"/>
                <link rel="icon" href="/images/favicon.png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
            </Head>
            <ButtonMenu/>
            <Header headerProps={header}/>
            <Content
                sectionsData={body ?? []}
                services={services}
                reviews={reviews}
                widgetOrder={widgetOrder}
                widgetReview={widgetReview}
                isSentOrder={isSentOrder}
                setIsSentOrder={setIsSentOrder}
            />
            <Script
                src="/js/accordion.js"
                strategy="lazyOnload"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
                strategy="lazyOnload"
                onLoad={() => {
                    createSwiperReviews();
                    createSwiperQuestions();
                }}
            />
            <Footer footerProps={footer}/>
        </>
    )
}