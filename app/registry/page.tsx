'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import { Button, Grid, View } from '@aws-amplify/ui-react';

const registry = [
    {
        key: 1,
        linkText: 'Crate & Barrel Registry',
        link: 'https://www.crateandbarrel.com/gift-registry/elizabeth-quinn-and-allie-harrison/r6841118?isRedirect=true',
    },
    {
        key: 2,
        linkText: 'Target Registry',
        link: 'https://www.target.com/gift-registry/gift-giver?registryId=5a2ca620-a26b-11ee-be81-cd9cfd248466&type=WEDDING',
    },
    {
        key: 3,
        linkText: 'Donate - Meow House Cat Rescue',
        link: 'https://www.meowhousecatrescue.com/donateshop.html',
    },
    {
        key: 4,
        linkText: 'Donate - Ulman Foundation',
        link: 'https://impact.ulmanfoundation.org/fundraiser/5152364',
    }
 ]

const Registry = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                <View className={commonStyles.headerDescriptionText}>The best gift is your presence at our wedding, however we are registered at Target and Crate and Barrel if you would like to purchase something. We are also including links to donate to Meow House (where we got our cats) and the Ulman Foundation (our favorite young adult cancer organization)</View>
                <View className={commonStyles.infoContainer}>
                    <View className={commonStyles.justifyContentCenter}>
                    { registry.map(registry => (
                       <Button
                            key={registry.key}
                            minWidth={{ xl: '20rem', large: '20rem', small: '20rem', medium: '20rem', base: '5rem'}}
                            marginBottom={{ xl: '2rem', large: '2rem', small: '2rem', medium: '2rem', base: '1rem'}}
                            marginTop={{ xl: '2rem', large: '2rem', small: '2rem', medium: '2rem', base: '1rem'}}
                            marginLeft={{ xl: '2rem', large: '2rem', small: '0', medium: '2rem', base: '0'}}
                            marginRight={{ xl: '2rem', large: '2rem', small: '0', medium: '2rem', base: '0'}}
                            textAlign={'center'}
                            variation="primary"
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
