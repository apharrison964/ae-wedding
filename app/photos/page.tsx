'use client'

import { Grid, Image } from '@aws-amplify/ui-react';
import React from 'react';

const photos = [
    {
        key: 1,
        photoSrc: 'IMG_3918.JPEG',
        alt: 'Allie and Elizabeth in front of Florida Pond',
        description: 'In May 2023, Allie and Elizabeth went to Orlando for Elizabeth\'s grandmother\'s 90th birthday!'
    },
    {
        key: 2,
        photoSrc: '24840E39-D4B2-4603-81CD-F3B419922562.JPG',
        alt: 'Allie and Elizabeth at a brewery',
        description: 'Hanging out at a brewery'
    },
    {
        key: 3,
        photoSrc: 'IMG_4947_Original.jpg',
        alt: 'Elizabeth and Allie on their engagement day',
        description: 'Elizabeth and Allie on the day they got engaged in Ireland - July 2022'
    },
    {
        key: 4,
        photoSrc: 'IMG_4917.jpg',
        alt: 'Elizabeth and Allie on their engagement day',
        description: 'Elizabeth and Allie on the day they got engaged in Ireland - July 2022'
    },
    {
        key: 5,
        photoSrc: 'IMG_4287.jpg',
        alt: 'Elizabeth and Allie at a Spanish park',
        description: 'In February 2023, Elizabeth and Allie went to Spain and visited a park in Madrid'
    },
    {
        key: 6,
        photoSrc: 'IMG_4142.jpg',
        alt: 'Elizabeth and Allie in Spain',
        description: 'In February 2023, Elizabeth and Allie went to Spain'
    },
    {
        key: 7,
        photoSrc: 'IMG_7969.JPEG',
        alt: 'Oliver and Stella',
        description: 'Oliver and Stella snuggling on the couch - best buddies!'
    },
    {
        key: 8,
        photoSrc: 'IMG_7380.JPEG',
        alt: 'Allie and Elizabeth at a wedding',
        description: 'In September 2022, Allie and Elizabeth attended their friend\'s wedding in Texas!'
    },
    {
        key: 9,
        photoSrc: 'daisy.png',
        alt: 'Daisy puppy graduation',
        description: 'Daisy, as a puppy kindergarten graduate in November 2023'
    }
]

const Photos = () => {
    return (
        <Grid templateColumns={{ xl: '1fr 1fr 1fr', large: '1fr 1fr 1fr', small: '1fr', medium: '1fr', base: '1fr'}} gap='1rem'>
            { photos.map(photo => (
                <Image key={photo.key}
                    height='100%'
                    fetchPriority='high'
                    src={photo.photoSrc}
                    alt={photo.alt}
                />
                                
            ))}
           
        </Grid>
    );
}

export default Photos;
