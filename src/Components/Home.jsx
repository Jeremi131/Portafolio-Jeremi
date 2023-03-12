import React from 'react'
import PrincipalImg from '../../public/images/photoDesktop.jpg'
import './styles/home.css'

const Home = () => {
    return (
        <section className='home'>
            <div>
                <div className='text_container'>
                    <h1 className='name'>Jeremi <span>Castellano</span></h1>
                    <h1 className='title'>Desarrollador <span>Front-end</span> </h1>
                    <h3 className='sub_title'>Javascript | HTML | CSS | React Js.</h3>
                </div>

                <div className='container_social'>
                    <i className='bx icon_social bxl-linkedin'></i>
                    <i className='bx icon_social bxl-facebook'></i>
                    <i className='bx icon_social bxl-instagram'></i>
                </div>
            </div>

            <div className='containerImg'>
                <img className='img_principal' src={PrincipalImg} alt="" />
                <button className='btn_home'><i className='bx icon_btn bxs-envelope' ></i>Contactame</button>
            </div>
        </section>
    )
}

export default Home