'use client'

import { Image, View } from '@aws-amplify/ui-react';

export default function Arrow({onClick, arrowType}) {
    return (
        <View as='span' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image
                onClick={onClick}
                fetchPriority='high'
                style={{margin: '1rem', borderRadius: '0.5rem', background: 'rgba(255, 255, 255, 0.60)'}}
                width={{ xl: 'unset,', large: 'unset', small: 'unset', medium: 'unset,', base: '2rem'}}
                padding={{ xl: '1rem,', large: '1rem', small: '1rem', medium: '1rem,', base: '0.5rem'}}
                src={ arrowType === 'left' ? 'left-arrow.svg' : 'right-arrow.svg'}
                alt={ arrowType === 'left' ? 'left arrow' : 'right arrow'}
            />
        </View>
    )
  } 