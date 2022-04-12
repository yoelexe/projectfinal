import React from 'react';
import {Link} from 'react-router-dom';
import '../home/ListMovies.css';
import {images} from './images';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';



// <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />

const ListMovies = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return(
        <motion.div  ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
            <h2><p>Próximos Estrenos <Link to='/peliculas'>Ver todo</Link></p></h2>
            <motion.div  
            drag='x' 
            dragConstraints={{right: 0, left: -width}}
            className='inner-carousel'>
                {images.map((img) => {
                    return(
                        <motion.div className='item' key={img}>
                            <img src={img} alt=''></img>
                        </motion.div>
                    );
                })}
            </motion.div>
            <h2><p>Cartelera <Link to='/peliculas'>Ver todo</Link></p></h2>
            <motion.div  
            drag='x' 
            dragConstraints={{right: 0, left: -width}}
            className='inner-carousel'>
                
                {images.map((img) => {
                    return(
                        <motion.div className='item' key={img}>
                            <img src={img} alt=''></img>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

export default ListMovies;
