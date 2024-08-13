'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { FaCheck, FaX } from "react-icons/fa6";
import RSVPConfirmationItem from './confirmation-item';





const RSVPConfirmation = ({attendee, relatedAttendees, plusOne, addPlusOne, setUpdateDone }) => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                <View className={commonStyles.headerDescriptionSub}>We've got your RSVP information saved below. You are welcome to leave this page and continue browsing the wedding website.</View>
                <View className={commonStyles.headerDescriptionSub} style={{ textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setUpdateDone(false)}>Something doesn't look right? Edit RSVP information</View>

               <Flex paddingTop="1rem" width='100%' direction='column' alignItems='flex-start'>
                    <RSVPConfirmationItem attendeeInfo={attendee}></RSVPConfirmationItem>

                    { relatedAttendees.map(relatedAttendee => (
                        <RSVPConfirmationItem key={relatedAttendee.id} attendeeInfo={relatedAttendee}></RSVPConfirmationItem>
                    ))}
                    {plusOne && addPlusOne ? <RSVPConfirmationItem attendeeInfo={plusOne}></RSVPConfirmationItem> : null}

               </Flex>
            </View>
        </Grid>
    );
}

export default RSVPConfirmation;
