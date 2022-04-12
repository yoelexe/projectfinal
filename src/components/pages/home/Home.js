import React from 'react';
import ListMovies from './ListMovies'
import SliderCarousel from './SliderCarousel'

const Home = () => {
    return (
        <div className='App'>
            
            <SliderCarousel/>
            <ListMovies/>
        </div>

    )
    
}

export default Home;