'use client'

import React from 'react';
import { Grid, View } from '@aws-amplify/ui-react';
import commonStyles from '../../styles/common.module.scss';


const OurStory = () => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={1}>
                <View className={commonStyles.headerDescriptionHeader}>OUR STORY</View>
                <View className={commonStyles.headerDescriptionText}>
                <div className={commonStyles.paragraphSpacing}>Our story started like many modern dating stories do, on Hinge. Allie’s friends (thanks Diana and Garrett!) swiped right on Elizabeth and sent a message, and Elizabeth logged in to the app a month later to respond. Little did she know, Allie had planned to delete the app that day. We both feel so lucky that our timing worked out.</div>
                <div className={commonStyles.paragraphSpacing}>We started texting and within a week or two, we were on our first date at Brier Creek Beer Garden. We talked for over two hours and both went home with huge smiles on our faces. We spent the next few months going out on more dates, quickly falling in love. We knew pretty quickly that we were meant to be together and moved in together so we could be a family of four (with Allie’s, now our cats Stella + Oliver). In September 2023, we adopted our puppy, Daisy, and now our fur family is complete.</div>
                <div className={commonStyles.paragraphSpacing}>We took our first trip together about 10 months into our relationship. Allie met up with me in San Antonio at the end of a work trip and we took the train to Dallas for a wedding that weekend. Despite some adjustments, we quickly fell in love with traveling together, getting engaged on our trip to Ireland in summer 2023.</div>
                <div className={commonStyles.paragraphSpacing}>Elizabeth knew Allie would propose on the trip but the proposal didn’t happen on the day that Allie had planned. We were sitting in front of Galway Bay and it was so peaceful, we just knew it had to be our proposal spot. We exchanged promises of marriage and gave each other rings when we got back to our hotel.</div>
                <div className={commonStyles.paragraphSpacing}>When we’re not traveling or running after our puppy you can find us at trivia, enjoying hobbies together (Allie playing video games and Elizabeth reading), or riding our bikes.</div>
                <div className={commonStyles.paragraphSpacing}>We are so thankful to our family and friends who support us and our relationship. We can’t wait to celebrate the start of our marriage with the people we love!</div>

                </View>
            </View>
        </Grid>
    );
}

export default OurStory;
