'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import { Grid, View } from '@aws-amplify/ui-react';
import ItemDetails from '../common/item-details';

const details = [
    {
        key: 1,
        title: 'MARKET AND MOSS',
        subtitle1: '700 Market Street',
        subtitle2: 'Chapel Hill, NC 27516',
        linkText: 'Visit website',
        link: 'https://www.marketandmoss.com',
        description: `Market and Moss is a great option for those looking to eat with local, seasonal ingrediants, and speciality cocktails.`
    },
    {
        key: 2,
        title: 'AL\'S BURGER SHACK - SOUTHERN VILLAGE',
        subtitle1: '708 Market Street',
        subtitle2: 'Chapel Hill, NC 27516',
        linkText: 'Visit website',
        link: 'https://www.alsburgershack.com',
        description: `Al\'s Burger Shack is a Chapel Hill staple! The original restuarnt is on Franklin Street (feel free to visit that location also!), but Southern Village has an Al\'s that is just as good!`
    },
    {
        key: 3,
        title: 'TOP OF THE HILL RESTAURANT & BREWERY',
        subtitle1: '100 E Franklin St',
        subtitle2: 'Chapel Hill, NC 27514',
        linkText: 'Visit website',
        link: 'https://www.thetopofthehill.com',
        description: `In the heart of downtown Chapel Hill, Top of the Hill (commonly referred to as TOPO) is a Chapel Hill classic. They serve food, and have over 75 beer options to choose from`
    },
    {
        key: 4,
        title: 'THE LUMINA THEATER',
        subtitle1: '620 Market St.',
        subtitle2: 'Chapel Hill, NC 27515',
        linkText: 'Visit website',
        link: 'https://www.carolinacinemas.com/lumina',
        description: `A locally owned theater in Southern Village - a great place to end walking around Southern Village!`
    }
 ]

const ThingsToDo = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                <View className={commonStyles.headerDescriptionText}>The wedding will be taking place in Chapel Hill, NC, home of the University of North Carolina. Visit campus, or Franklin Street, a Chapel Hill favorite with shops, restuarants, and coffee shops. Also close to the venue is Southern Village, which has dining, a coffee/gelato shop, a wine shop, and more!</View>
                <View className={commonStyles.infoContainer}>
                    <ItemDetails details={details}></ItemDetails>
                </View>
            </View>
        </Grid>
    );
}

export default ThingsToDo;
