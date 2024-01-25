"use client"

import homeStyles from '../styles/home.module.scss';
import commonStyles from '../styles/common.module.scss';

import React from 'react';
import { Button, Image, View } from '@aws-amplify/ui-react';
import ItemDetails from './common/item-details';
import { useRouter } from 'next/navigation';
import { routes } from './content/routes';


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

    const details = [
        {
         key: 1,
         title: 'CEREMONY',
         subtitle1: '3:30 PM - 4:00 PM',
         description: `Join us as we officially tie the knot under the covered pavilion on Lavender Oaks Farm!`
        },
        {
         key: 2,
         title: 'COCKTAIL HOUR',
         subtitle1: '4:00 PM - 5:00 PM',
         description: `Enjoy beer, wine, and specialty cocktails brought to you by Oliver, Stella, and Daisy! We'll be by the fire, enjoying appetizers and conversation.`
        },
        {
         key: 3,
         title: 'RECEPTION',
         subtitle1: '5:00 PM - 10:00 PM',
         description: `Join us in celebrating our marriage! Dinner, dancing, and a few unique surprises from our venue!`
        }
     ]

    return (

        <>
           <Image
                fetchPriority='high'
                src="ae.svg"
                alt="Main pic"
            />

            <View as="h2" fontSize={titleFont} className={homeStyles.title}>WEDDING DAY</View>
            <View fontSize={detailsFont} className={homeStyles.details}>
                <p>NOVEMBER 23, 2024</p>
                <p>3:30 PM - 10:00 PM</p>
            </View>
            <View fontSize={locationFont} className={homeStyles.location}>
                <p>Lavender Oaks Farm</p>
                <p>3833 Millard Whitley Rd.</p>
                <p>Chapel Hill, NC, 27516</p>
            </View>
            <View className={commonStyles.infoContainer}>
                <ItemDetails details={details}></ItemDetails>
            </View>
            {
                !routes.find(route => 'RSVP' === route.title)?.disabled && 
                <Button
                    variation="primary"
                    loadingText="Loading, please wait"
                    onClick={() => router.push('/rsvp')}>
                    RSVP
                </Button>

            }
        </>
    );
}

export default Home;
