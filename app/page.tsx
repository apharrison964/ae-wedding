"use client"

import Head from 'next/head';
import commonStyles from '../styles/common.module.scss';
import homeStyles from '../styles/home.module.scss';
import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsExports from '../src/aws-exports';
import { listAttendees } from '../src/graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { ListAttendeesQuery } from '../src/API';
import { GraphQLResult } from "@aws-amplify/api";
import { Flex, Image, View, useBreakpointValue } from '@aws-amplify/ui-react';
import HomeDetails from './home/home-details';

// Amplify.configure(awsExports);

const Home = () => {
    // const attendeeData = (await API.graphql(graphqlOperation(listAttendees))) as GraphQLResult<ListAttendeesQuery>;
    // const attendees = attendeeData.data?.listAttendees?.items;

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
        </>
    );
}

export default Home;
