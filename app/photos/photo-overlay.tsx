'use client'

import { StorageImage } from '@aws-amplify/ui-react-storage';
import { Image, View } from '@aws-amplify/ui-react';
import { useState } from 'react';


export default function PhotoOverlay({onClick, updatePhoto, photo, photoList}) {
    const [arrows, setArrows] = useState(false);
    return (
        <div onClick={onClick} className="photo-overlay">
            <View className="photo-item" margin={{ xl: '2rem,', large: '2rem', small: '5rem', medium: '2rem,', base: '5rem'}} onClick={onClick} >
                { arrows && <View as='span' style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log('picture after', photoList[photoList.indexOf(photo) - 1]);
                        if (photoList[photoList.indexOf(photo) - 1]) {
                            setArrows(false);
                            updatePhoto(photoList[photoList.indexOf(photo) - 1]);
                        }
                    } }
                    fetchPriority='high'
                    style={{margin: "1rem", borderRadius: '0.5rem', background: 'rgba(255, 255, 255, 0.60)'}}
                    width={{ xl: 'unset,', large: 'unset', small: 'unset', medium: 'unset,', base: '2rem'}}
                    padding={{ xl: '1rem,', large: '1rem', small: '0.5rem', medium: '1rem,', base: '0.5rem'}}
                    src="left-arrow.svg"
                    alt="left arrow"
                    />
                </View>
                }
                <StorageImage 
                    objectFit={{ base: 'contain' }} 
                    onLoad={() => setArrows(true)}
                    key={photo.key} 
                    alt={photo.metadata?.alt} 
                    imgKey={photo.key} 
                    accessLevel="guest" />
                { arrows && <View as='span' style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log('picture after', photoList[photoList.indexOf(photo) + 1]);
                        if (photoList[photoList.indexOf(photo) + 1]) {
                            setArrows(false);
                            updatePhoto(photoList[photoList.indexOf(photo) + 1]);
                        }
                    } }
                    fetchPriority='high'
                    style={{margin: "1rem", borderRadius: '0.5rem', background: 'rgba(255, 255, 255, 0.60)'}}
                    width={{ xl: 'unset,', large: 'unset', small: 'unset', medium: 'unset,', base: '2rem'}}
                    padding={{ xl: '1rem,', large: '1rem', small: '0.5rem', medium: '1rem,', base: '0.5rem'}}
                    src="right-arrow.svg"
                    alt="right arrow"
                    />
                </View>
                }
            </View>
        </div>
    )
  } 