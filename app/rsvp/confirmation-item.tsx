'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { FaCheck, FaX } from "react-icons/fa6";
import { enumToFood } from '../helper/food-helper';





const RSVPConfirmationItem = ({attendeeInfo}) => {
    return (
    <View fontSize='1.25rem' paddingTop='1rem' width='100%'>
        <Flex alignItems='center' justifyContent={{base: 'center', 'small': 'center'}}>{ attendeeInfo.isAttending ? <View display={{base: 'none', small: 'none', medium: 'grid', large: 'grid', xl: 'grid'}}><FaCheck color='green'/></View> : <View display={{base: 'none', small: 'none', medium: 'grid', large: 'grid', xl: 'grid'}}><FaX color='red'/></View>}{attendeeInfo.firstName} {attendeeInfo.lastName} - {attendeeInfo.isAttending ? 'ACCEPT' : 'DECLINE' }</Flex>
        { attendeeInfo.isAttending ? <Flex fontWeight='300' justifyContent={{base: 'center', 'small': 'center'}}><View display={{base: 'none', small: 'none', medium: 'grid', large: 'grid', xl: 'grid'}}><FaCheck color='green' visibility='hidden'/></View>Meal Selection: { enumToFood(attendeeInfo.food) }</Flex> : null}
    </View>
    );
}

export default RSVPConfirmationItem;
