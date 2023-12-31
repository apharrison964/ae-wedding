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
            image: 'party.svg'
        },
        {
            key: 2,
            name: 'Thomas Quinn',
            image: 'party.svg'
        },
        {
            key: 3,
            name: 'Suenia De Avezedo',
            image: 'party.svg'
        },
        {
            key: 4,
            name: 'Jack Harrison',
            image: 'party.svg'
        }
    ]
    return (
        <Grid templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                { weddingParty.map(party => (
                    <Grid templateColumns={{ xl: '1fr 1fr', large: '1fr 1fr', small: '1fr', medium: '1fr', base: '1fr'}} key={party.key} className={`${commonStyles.infoContainer} ${partyStyles.gap}`}>
                        <Image
                        marginRight={{ xl: '3rem', large: '3rem'}}
                            src={party.image}
                            alt={party.name}
                            />
                        <View className={partyStyles.personInfo}>
                            <View className={partyStyles.name}>{party.name}</View>
                        </View>
                    </Grid>
                ))}
            </View>
        </Grid>
    );
}

export default WeddingParty;
