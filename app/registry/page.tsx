'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Button, Grid, View } from '@aws-amplify/ui-react';

const registry = [
    {
        key: 1,
        linkText: 'Williams Sonoma Registry',
        link: 'https://google.com',
    },
    {
        key: 2,
        linkText: 'Amazon Registry',
        link: 'https://google.com',
    },
    {
        key: 3,
        linkText: 'Target Registry',
        link: 'https://google.com',
    },
    {
        key: 4,
        linkText: 'Fancy Plantsy Registry',
        link: 'https://google.com',
    }
 ]

const Registry = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                <View className={commonStyles.headerDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique.</View>
                <View className={commonStyles.infoContainer}>
                    <View className={commonStyles.justifyCenter}>
                    { registry.map(registry => (
                       <Button
                            key={registry.key}
                            width={{ xl: '20rem', large: '20rem', small: '100%', medium: '20rem', base: '100%'}}
                            marginBottom={{ xl: '2rem', large: '2rem', small: '1rem', medium: '2rem', base: '1rem'}}
                            marginTop={{ xl: '2rem', large: '2rem', small: '1rem', medium: '2rem', base: '1rem'}}
                            marginLeft={{ xl: '2rem', large: '2rem', small: '0', medium: '2rem', base: '0'}}
                            marginRight={{ xl: '2rem', large: '2rem', small: '0', medium: '2rem', base: '0'}}
                            variation="primary"
                            loadingText="Loading, please wait"
                            onClick={() => window.open(registry.link, '_blank')}>
                            { registry.linkText }
                        </Button> 
                    ))}
                    </View>
                </View>
            </View>
        </Grid>
    );
}

export default Registry;
