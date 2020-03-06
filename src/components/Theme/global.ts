import { createGlobalStyle } from 'styled-components';
import OpenSansLightWoff from '../../assets/fonts/opensans-light-webfont.woff';
import OpenSansLightWoff2 from '../../assets/fonts/opensans-light-webfont.woff2';
import OpenSansRegularWoff from '../../assets/fonts/opensans-regular-webfont.woff';
import OpenSansRegularWoff2 from '../../assets/fonts/opensans-regular-webfont.woff2';
import OpenSansBoldWoff from '../../assets/fonts/opensans-bold-webfont.woff';
import OpenSansBoldWoff2 from '../../assets/fonts/opensans-bold-webfont.woff2';

export default createGlobalStyle`
body{
    background: linear-gradient(to right, rgba(3,67,120,1) 0%,rgba(35,125,199,1) 100%); 
}
@font-face {
    font-family: 'open_sansbold';
    src: url(${OpenSansBoldWoff2}) format('woff2'),
         url(${OpenSansBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'open_sanslight';
    src: url(${OpenSansLightWoff2}) format('woff2'),
         url(${OpenSansLightWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'open_sansregular';
    src: url(${OpenSansRegularWoff2}) format('woff2'),
         url(${OpenSansRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}
`;
