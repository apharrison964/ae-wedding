'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Grid, View } from '@aws-amplify/ui-react';
import ItemDetails from '../common/item-details';

const details = [
    {
        key: 1,
        title: 'MARRIOT HOTEL',
        subtitle1: '100 Main St',
        subtitle2: 'Durham, NC',
        linkText: 'Visit website',
        link: 'https://google.com',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis.`
    },
    {
        key: 2,
        title: 'MARRIOT HOTEL',
        subtitle1: '100 Main St',
        subtitle2: 'Durham, NC',
        linkText: 'Visit website',
        link: 'https://google.com',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. `
    }
 ]


const Travel = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                <View className={commonStyles.headerDescriptionHeader}>FLYING DIRECTIONS</View>
                <View className={commonStyles.headerDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique. Maecenas mauris tortor, pellentesque id mi eget, commodo sodales odio. Pellentesque nec ligula tristique, maximus magna ut, auctor metus. Nulla efficitur est sit amet efficitur interdum. Nam bibendum euismod purus vel mollis. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo pretium lectus, aliquet pulvinar nisl iaculis eu. Praesent ut diam non orci vehicula tempor. Nunc eu euismod erat. Duis malesuada leo a velit tempus convallis. Duis eget neque tortor. Etiam placerat libero eget congue maximus.</View>
            </View>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                <View className={commonStyles.headerDescriptionHeader}>DRIVING DIRECTIONS</View>
                <View className={commonStyles.headerDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique. Maecenas mauris tortor, pellentesque id mi eget, commodo sodales odio. Pellentesque nec ligula tristique, maximus magna ut, auctor metus. Nulla efficitur est sit amet efficitur interdum. Nam bibendum euismod purus vel mollis. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo pretium lectus, aliquet pulvinar nisl iaculis eu. Praesent ut diam non orci vehicula tempor. Nunc eu euismod erat. Duis malesuada leo a velit tempus convallis. Duis eget neque tortor. Etiam placerat libero eget congue maximus.</View>
            </View>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={3}>
                <View className={commonStyles.headerDescriptionHeader}>PLACES TO STAY</View>
                <View className={commonStyles.headerDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique. Maecenas mauris tortor, pellentesque id mi eget, commodo sodales odio. Pellentesque nec ligula tristique, maximus magna ut, auctor metus. Nulla efficitur est sit amet efficitur interdum. Nam bibendum euismod purus vel mollis. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo pretium lectus, aliquet pulvinar nisl iaculis eu. Praesent ut diam non orci vehicula tempor. Nunc eu euismod erat. Duis malesuada leo a velit tempus convallis. Duis eget neque tortor. Etiam placerat libero eget congue maximus.</View>
                <View className={commonStyles.infoContainer}>
                    <ItemDetails details={details}></ItemDetails>
                </View>
            </View>
        </Grid>
    );
}

export default Travel;
