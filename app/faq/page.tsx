'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import { Grid, View } from '@aws-amplify/ui-react';

const faqs = [
    {
        key: 1,
        question: 'What date should I RSVP by?',
        answer: 'We will be sending out official invitations this summer - please respond no later than October 1st!',
    },
    {
        key: 2,
        question: 'Do I RSVP by mail or on the website?',
        answer: 'When RSVPs start, we will only be accepting them on the website. If you need help, contact eaharrisonwedding2024@gmail.com and we can enter the information for you.',
    },
    {
        key: 3,
        question: 'Will the wedding be indoors or outdoors?',
        answer: 'The ceremony will be under a covered, open air barn. If it gets too cold, we will have heaters. The reception will be held in a climate controlled barn that leads onto a patio that will have fire pits, heaters, and a big fireplace.',
    },
    {
        key: 4,
        question: 'What is the weather like in the area?',
        answer: 'It will most likely be on the colder side, but since we are in North Carolina, where the weather can’t make up its mind, there is a potential for warmer weather in the area. About a week before, check your weather apps just to make sure!',
    },
    {
        key: 5,
        question: 'Will there be a shuttle to and from the hotel?',
        answer: 'For guests staying in our room block at the Hyatt Place Chapel Hill/Southern Village, there will be a shuttle that will run twice to get to the venue, and twice to get back. Check back soon for more information on the schedule. For those driving, you can leave your car at the venue and pick it up the next day if need be. There is plenty of parking!',
    },
    {
        key: 6,
        question: 'What is the dress code?',
        answer: 'The dress code is cocktail attire.',
    },
    // {
    //     key: 7,
    //     question: 'Are children allowed?',
    //     answer: 'Yes, children are allowed! We will be sending out invitations that include children, but if there are others you want to invite, please email eaharrisonwedding2024@gmail.com to discuss more. We will have a kid friendly menu.',
    // },
    // {
    //     key: 8,
    //     question: 'Can I bring a plus one?',
    //     answer: 'If stated on the invite, you may bring a plus one. Otherwise, we are not allowing additional people to attend.',
    // },
    {
        key: 9,
        question: 'Am I allowed to take photos at the wedding?',
        answer: 'Photos are welcome, but please refrain from taking pictures during the actual ceremony - we want the photographers to be able to capture the moment as best as they can!',
    },
    {
        key: 10,
        question: 'What is your wedding hashtag?',
        answer: '#HappilyEverHarrison',
    },
    {
        key: 11,
        question: 'I have a question not listed, who do I contact?',
        answer: 'Feel free to contact eaharrisonwedding2024@gmail.com for anything not listed here.',
    }
 ]

const FAQ = () => {
    return (
        <Grid className={`${commonStyles.headerDescription} ${commonStyles.headerDescriptionFAQ}`}  templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            { faqs.map((faq, index) => (
                <View key={faq.key} columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={index + 1}>
                    <View className={commonStyles.headerDescriptionSubheader}>{faq.question}</View>
                    <View className={commonStyles.headerDescriptionText}>{faq.answer}</View>
                </View>
            ))}
        </Grid>
    );
}

export default FAQ;
