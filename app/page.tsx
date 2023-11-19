"use client"

import homeStyles from '../styles/home.module.scss';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Button, Image, View } from '@aws-amplify/ui-react';
import HomeDetails from './home/home-details';
import { useRouter } from 'next/navigation';


const Home = () => {
    const router = useRouter();

    const titleFont = {
        base: '1.25rem',
        small: '1.5rem',
        medium: '2.5rem',
        large: '2.5rem',
    }  

    const detailsFont = {
        base: '1rem',
        small: '1.25rem',
        medium: '1.5rem',
        large: '1.5rem',
    }  

    const locationFont = {
        base: '1rem',
        small: '1.25rem',
        medium: '1.5rem',
        large: '1.5rem',
    }

    return (

        <>
           <Image
                src="ae.svg"
                alt="Main pic"
            />

            <View as="h2" fontSize={titleFont} className={homeStyles.title}>WEDDING DAY</View>
            <View fontSize={detailsFont} className={homeStyles.details}>
                <p>NOVEMBER 23, 2024</p>
                <p>3:00 PM - 10:00 PM</p>
            </View>
            <View fontSize={locationFont} className={homeStyles.location}>
                <p>Lavender Oaks Farm</p>
                <p>3833 Millard Whitley Rd.</p>
                <p>Chapel Hill, NC, 27516</p>
            </View>
            <View className={homeStyles.infoContainer}>
                <HomeDetails></HomeDetails>
            </View>
            <Button
                variation="primary"
                loadingText="Loading, please wait"
                onClick={() => router.push('/rsvp')}>
                RSVP
            </Button>
        </>
    );
}

export default Home;
