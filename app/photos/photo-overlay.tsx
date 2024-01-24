'use client'

import { StorageImage } from '@aws-amplify/ui-react-storage';
import { Image, View } from '@aws-amplify/ui-react';
import { useState } from 'react';
import Arrow from '../common/arrow';


export default function PhotoOverlay({onClick, updatePhoto, photo, photoList}) {
    const [arrows, setArrows] = useState(false);

    const arrowClicked = (event, arrowType) => {
        event.stopPropagation();
        let newPhoto = arrowType === 'left' ? photoList[photoList.indexOf(photo) - 1] : photoList[photoList.indexOf(photo) + 1];
        
        if (newPhoto) {
            setArrows(false);
            updatePhoto(newPhoto);
        }
                    
    }

    return (
        <div onClick={onClick} className='photo-overlay'>
            <View className='photo-item' margin={{ xl: '2rem,', large: '2rem', small: '5rem', medium: '2rem,', base: '5rem'}} onClick={onClick} >
                { arrows && <Arrow arrowType={'left'} onClick={(event) => arrowClicked(event, 'left')} ></Arrow> }
                <StorageImage 
                    objectFit={{ base: 'contain' }} 
                    onLoad={() => setArrows(true)}
                    key={photo.key} 
                    alt={photo.metadata?.alt} 
                    imgKey={photo.key} 
                    accessLevel='guest' />
                { arrows && <Arrow arrowType={'right'} onClick={(event) => arrowClicked(event, 'right')} ></Arrow> }

            </View>
        </div>
    )
  } 