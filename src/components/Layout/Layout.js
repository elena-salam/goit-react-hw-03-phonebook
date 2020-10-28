import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    width: 380px;
    margin: 0 auto;
    
`;

function Layout({children}){
    return(
        <Section>
            {children}
        </Section>
    )
}

Layout.propTypes={
    children: PropTypes.arrayOf(PropTypes.object),
    // children: PropTypes.oneOfType([
    //     PropTypes.bool,
    //     PropTypes.object,
    // ])

}
export default Layout;