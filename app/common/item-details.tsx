"use client"

import { Button, Flex, View, useBreakpointValue } from "@aws-amplify/ui-react";
import commonStyles from '../../styles/common.module.scss';



const ItemDetails = ( { details }) => {

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

    const descriptionTextAlign = {
        base: 'center',
        small: 'center',
        medium: 'inherit',
        large: 'inherit'
    }

    return (
        <>
            { details.map(detail => (
                <Flex key={detail.key} direction='column' alignItems='center'>
                    <Flex justifyContent='center' margin={itemMargin} wrap={{ base: 'wrap', small: 'wrap', medium: 'nowrap', large: 'nowrap'}} className={commonStyles.infoContainerItem}>
                        <View className={commonStyles.infoContainerItemMain}>
                            <p>{detail.title}</p>
                            <p className={commonStyles.subtitle}>{detail.subtitle1}</p>
                            <p className={commonStyles.subtitle}>{detail.subtitle2}</p>
                        </View>
                        <View paddingLeft={itemDetailPadding} style={{ borderLeft }} className={commonStyles.infoContainerItemDetails}>
                            <View as="p" paddingRight={itemDetailPadding} textAlign={descriptionTextAlign} className={commonStyles.itemDetail}>
                                { detail.description }
                            </View>
                        </View>
                    </Flex>
                    { detail.link ? 
                    <Button
                        className={commonStyles.detailButton}
                        variation="primary"
                        loadingText="Loading, please wait"
                        onClick={() => window.open(detail.link, '_blank')}>
                        { detail.linkText }
                    </Button> 
                    : null}
                </Flex>
            ))}
        </>
    )
}

export default ItemDetails;