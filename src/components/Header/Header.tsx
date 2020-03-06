import React from 'react';
import HeaderStyles from './styles/HeaderStyles';
import Logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <HeaderStyles>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <h4>...These are the movies you are looking for...</h4>
        </HeaderStyles>
    );
};

export default Header;
