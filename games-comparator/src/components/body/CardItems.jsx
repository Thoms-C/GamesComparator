import React from 'react';
import {CardsItem,CardsItemWrap,CardsItemImg,CardsItemInfo,CardsItemText} from '../../styled-components/CardItemsStyle'

export default function Carditem(props) {
    return (
        <>
            <CardsItem>
                <CardsItemWrap data-category={props.label}>
                    <CardsItemImg src={props.src}/>
                </CardsItemWrap>
                <CardsItemInfo>
                    <CardsItemText>{props.text}</CardsItemText>
                </CardsItemInfo>
            </CardsItem>
        </>
    )
}