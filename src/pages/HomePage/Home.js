import { render } from '@testing-library/react';
import Header from '../../components/Header/Header';
import React from 'react';
import Feed from '../../components/Feed/Feed';
const Home = () => {
    
        return (
            <div>
                <Header/>
                <Feed/>

            </div>
        );
    
}   

export default Home;
