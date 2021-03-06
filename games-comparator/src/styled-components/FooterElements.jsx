import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #000814;
    padding-top:2vh;
    display:flex;
    flex-direction:row;
    max-height:30vh;
    bottom:0;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items;center;
    max-width: 1100px;
    margin 0 auto;
`

export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top:32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display:flex;

    @media screen and (max-width:820px) {
        flex-direction:column;
    }
`

export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color:#fff;

    @media screen and (max-width:420px) {
        margin:0:
        padding:10px;
        width:100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 24px;
    font-weight:bold;
    margin-bottom:16px;
`

export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:16px;

    &:hover {
        color: #01bf71;
        transition:0.3s ease-out
    }
`

export const FooterBottom = styled.div`
    text-align:center;
    color:#fff;
    padding-bottom:1vh;
    background-color:#000814;
`

export const Img = styled.img`
    height:30vh;
`