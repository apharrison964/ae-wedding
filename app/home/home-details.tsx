"use client"

import { Flex, View, useBreakpointValue } from "@aws-amplify/ui-react";
import homeStyles from '../../styles/home.module.scss';


const HomeDetails = () => {

    const borderLeft = useBreakpointValue({
        base: 'none',
        small: 'none',
        medium: '1px solid black',
        large: '1px solid black',
      }) as any;

    const itemDetailPadding = {
        base: '1rem',
        small: '3rem',
        medium: '3rem',
        large: '3rem',
    }

    const itemMargin = {
        base: '1rem 0 1rem 0',
        small: '1rem 0 1rem 0',
        medium: '1rem',
        large: '1rem'
    }

    const details = [
       {
        key: 1,
        title: 'CEREMONY',
        time: '3:00 PM - 3:30 PM',
        description: `Join us as we officially tie the knot under the covered pavilion on Lavender Oaks Farm! 
        `
       },
       {
        key: 2,
        title: 'COCKTAIL HOUR',
        time: '3:30 PM - 4:30 PM',
        description: `Enjoy beer, wine, and specialty cocktails brought to you by Oliver, Stella, and Daisy! We'll be by the fire, enjoying appetizers and conversation.`
       },
       {
        key: 3,
        title: 'RECEPTION',
        time: '4:30 PM - 10:00 PM',
        description: ` Join us in celebrating our marriage! Dinner, dancing, and a few unique surprises from our venue!`
       }
    ]

    return (
        <>
            { details.map(detail => (
                <Flex key={detail.key} margin={itemMargin} wrap={{ base: 'wrap', small: 'wrap', medium: 'nowrap', large: 'nowrap'}} className={homeStyles.infoContainerItem}>
                    <View className={homeStyles.infoContainerItemMain}>
                        <p>{detail.title}</p>
                        <p className={homeStyles.time}>{detail.time}</p>
                    </View>
                    <View paddingLeft={itemDetailPadding} style={{ borderLeft }} className={homeStyles.infoContainerItemDetails}>
                        <View as="p" paddingRight={itemDetailPadding} className={homeStyles.itemDetail}>
                            {detail.description}
                        </View>
                    </View>
                </Flex>
            ))}
        </>
    )
}

export default HomeDetails;