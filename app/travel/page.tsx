'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import { Grid, View } from '@aws-amplify/ui-react';
import ItemDetails from '../common/item-details';

const details = [
    {
        key: 1,
        title: 'HYATT PLACE',
        subtitle1: '3690 S Columbia St',
        subtitle2: 'Chapel Hill, NC 27517',
        linkText: 'Visit website',
        link: 'https://www.hyatt.com/shop/rooms/rduzc?location=Hyatt%20Place%20Chapel%20Hill%20%2F%20Southern%20Village&checkinDate=2024-11-22&checkoutDate=2024-11-24&rooms=1&adults=1&kids=0&corp_id=G-QHWD',
        description: `The Hyatt Place Chapel Hill/Southern Village hotel is a quick walk from Southern Village, where there are many amenities. We have our block from November 22nd to November 24th.`
    }
 ]


const Travel = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                <View className={commonStyles.headerDescriptionHeader}>DRIVING DIRECTIONS</View>
                <View className={commonStyles.headerDescriptionText}>Please type in “Lavender Oaks Farm” in Google Maps for the best directions from your location. When you get to the gravel road from Millard Whitley Rd, drive down and turn left at the stop sign through to the front gates. Follow the signs until you see the big gravel parking lot. Those that need extra assitance can get dropped off at the front - turn right from the parking lot. You may leave your car overnight if needed, and pick it up the next morning.</View>
            </View>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={3}>
                <View className={commonStyles.headerDescriptionHeader}>PLACES TO STAY</View>
                <View className={commonStyles.headerDescriptionText}>We have reserved a room block at the Hyatt Place Chapel Hill/Southern Village, which is about 15 minutes from Lavendar Oaks Farm. There is free parking, and Southern Village is a quick walk from the hotel.</View>
                <View className={commonStyles.infoContainer}>
                    <ItemDetails details={details}></ItemDetails>
                </View>
            </View>
        </Grid>
    );
}

export default Travel;
