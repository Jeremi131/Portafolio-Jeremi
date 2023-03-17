import React, { useState } from 'react'
import { Link } from 'react-scroll'
import PrincipalImg from '../../public/images/photoDesktop.jpg'
import './styles/home.css'

const Home = () => {
    return (
        <section id='home' className='home'>
            <div className='home_container'>
                <div className='text_container'>
                    <h1 className='name'>Jeremi <span>Castellano</span></h1>
                    <h1 className='title'>Desarrollador <span>Front-end</span> </h1>
                    <h3 className='sub_title'>Javascript | HTML | CSS | React Js.</h3>
                </div>

                <div className='container_social'>
                    <a href="https://www.linkedin.com/in/jeremi-castellano-5b924a1a3/" target='_blank'><i className='bx icon_social bxl-linkedin'></i></a>
                    <a href="https://github.com/Jeremi131" target='_blank'><i className='bx icon_social bxl-github'></i></a>
                    <a href="https://www.facebook.com/Jeremi.Castellano131" target='_blank'><i className='bx icon_social bxl-facebook'></i></a>
                </div>
            </div>

            <div className='containerImg'>
                <img className='img_principal' src={PrincipalImg} alt="" />
                <Link className='btn_home' smooth={true} spy={true} offset={0} duration={500} to='contact'><i className='bx icon_btn bxs-envelope' ></i>Contactame</Link>
            </div>
        </section>
    )
}

export default Home