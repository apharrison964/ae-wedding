'use client'

import commonStyles from '../../styles/common.module.scss';
import React from 'react';
import { Grid, View } from '@aws-amplify/ui-react';

const faqs = [
    {
        key: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique.',
    },
    {
        key: 2,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique.',
    },
    {
        key: 3,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique.',
    },
    {
        key: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat massa nec volutpat facilisis. Nullam dictum ultrices lacus, vel pretium mi blandit at. Morbi porta tortor non facilisis placerat. Vestibulum aliquam lacus ac rhoncus tristique.',
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
