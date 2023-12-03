'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Grid, View } from '@aws-amplify/ui-react';
import ItemDetails from '../common/item-details';

const details = [
    {
        key: 1,
        title: 'RESTAURANT ONE',
        subtitle1: '100 Main St',
        subtitle2: 'Durham, NC',
        linkText: 'Visit website',
        link: 'https://google.com',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis.`
    },
    {
        key: 2,
        title: 'RESTAURANT TWO',
        subtitle1: '100 Main St',
        subtitle2: 'Durham, NC',
        linkText: 'Visit website',
        link: 'https://google.com',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis.`
    },
    {
        key: 3,
        title: 'RESTAURANT THREE',
        subtitle1: '100 Main St',
        subtitle2: 'Durham, NC',
        linkText: 'Visit website',
        link: 'https://google.com',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis.`
    },
    {
        key: 4,
        title: 'ANOTHER FUN PLACE',
        subtitle1: '100 Main St',
        subtitle2: 'Durham, NC',
        linkText: 'Visit website',
        link: 'https://google.com',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. `
    }
 ]

const ThingsToDo = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                <View className={commonStyles.headerDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique.</View>
                <View className={commonStyles.infoContainer}>
                    <ItemDetails details={details}></ItemDetails>
                </View>
            </View>
        </Grid>
    );
}

export default ThingsToDo;
