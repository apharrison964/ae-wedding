'use client'

import commonStyles from '../../styles/common.module.scss';
import partyStyles from '../../styles/party.module.scss'
import React from 'react';
import { Flex, Grid, Image, View } from '@aws-amplify/ui-react';

const WeddingParty = () => {
    const weddingParty = [
        {
            key: 1,
            name: 'Olivia Harrison',
            description: 'Allie\'s sister',
            image: 'olivia.png'
        },
        {
            key: 2,
            name: 'Thomas Quinn',
            description: 'Elizabeth\'s brother',
            image: 'thomas.png'
        },
        {
            key: 3,
            name: 'Suenia de Azevedo',
            description: 'Allie\'s sister-in-law',
            image: 'suenia.png'
        },
        {
            key: 4,
            name: 'Jack Harrison',
            description: 'Allie\'s brother',
            image: 'jack.png'
        }
    ]
    return (
        <Grid templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                { weddingParty.map(party => (
                    <Grid templateColumns={{ xl: '1fr 1fr', large: '1fr 1fr', small: '1fr', medium: '1fr', base: '1fr'}} key={party.key} className={`${commonStyles.infoContainer} ${partyStyles.gap}`}>
                        <Image
                            marginRight={{ xl: '3rem', large: '3rem'}}
                            width={'192px'}
                            height={'192px'}
                            src={party.image}
                            alt={party.name}
                            />
                        <Grid className={partyStyles.personInfo} gap={{base: '1rem'}}>
                            <View className={partyStyles.name}>{party.name}</View>
                            <View className={partyStyles.description}>{party.description}</View>
                        </Grid>
                    </Grid>
                ))}
            </View>
        </Grid>
    );
}

export default WeddingParty;
