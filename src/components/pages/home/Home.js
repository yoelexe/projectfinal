import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCiudadThunk } from '../../../redux/actions/sedesAc';
import ListMovies from './ListMovies'
import SliderCarousel from './SliderCarousel'

const Home = () => {
    const ciudad = useSelector(state => state.ciudad)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCiudadThunk())
    },[dispatch])

    console.log(ciudad)
    return (
        <div className='App'>
            
            <SliderCarousel/>
            <ListMovies/>
        </div>

    )
    
}

export default Home;