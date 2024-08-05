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
    console.log('WHAT IS THIS', attendeeInfo);
    return (
    <View fontSize='1.25rem'>
        <Flex alignItems='center'>{ attendeeInfo.isAttending ? <FaCheck color='green' /> : <FaX color='red' />}{attendeeInfo.firstName} {attendeeInfo.lastName} - {attendeeInfo.isAttending ? 'ACCEPT' : 'DECLINE' }</Flex>
        { attendeeInfo.isAttending ? <Flex fontWeight='300'><FaCheck color='green' visibility='hidden'/>Meal Selection: { enumToFood(attendeeInfo.food) }</Flex> : null}
    </View>
    );
}

export default RSVPConfirmationItem;
