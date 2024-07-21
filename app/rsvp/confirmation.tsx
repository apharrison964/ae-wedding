'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { AttendeeRelated } from '../model/attendee-related';




const RSVPConfirmation = ({ attendeeRelated }) => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                <View className={commonStyles.headerDescriptionSub}>Please accept or decline for each person, and if accepting the invitation, choose a meal for each member of your party.</View>

                
                {/* <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="last_name">Last Name</Label> 
                    <Input value={lastNameValue} onChange={handleInputChange} id="last_name" name="last_name" />
                </Flex> */}
               <Flex paddingTop="1rem" justifyContent="center">
                    HI!
               </Flex>
            </View>
        </Grid>
    );
}

export default RSVPConfirmation;
