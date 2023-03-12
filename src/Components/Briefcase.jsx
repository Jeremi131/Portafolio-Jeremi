import React, { useState } from 'react'
import './styles/briefcase.css'
import pokeApi from '../../public/images/pokeApi.gif'
import ecommerce from '../../public/images/E-commerce.gif'

const Briefcase = () => {

    const imgData = [
        {
            img: "../../public/images/pokeApi.gif",
            id: 1,
            link: "https://app-clima-perez.netlify.app",
            descripcion: "App que detecta tu ubicacion y brinda el pronostico del clima."
        },
        {
            img: "../../public/images/E-commerce.gif",
            id: 2,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../public/images/e-commerceJs.gif",
            id: 3,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../public/images/quotes.gif",
            id: 4,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../public/images/weatherApp.gif",
            id: 5,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../public/images/rickAndMorty.gif",
            id: 6,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../public/images/userApp.gif",
            id: 7,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
    ]

    const [imgSelector, setImgSelector] = useState(0)

    const styleMovement = {
        transform: `translateX(calc(-${imgSelector} / 7 * 100%))`,
    }
    const handlePrevious = () => {
        if (imgSelector - 1 < 0) {
            setImgSelector(6)
        } else {
            setImgSelector(imgSelector - 1)
        }
    }
    const handleNext = () => {
        if (imgSelector + 1 > 6) {
            setImgSelector(0)
        } else {
            setImgSelector(imgSelector + 1)
        }
    }

    return (
        <section className='briefcase'>
            <h1 className='title_briefcase'>Mis Proy<span>ectos</span></h1>
            <div className='carousel'>
                <button onClick={handlePrevious} className='slider_btn slider_btn-right'><i className='bx bxs-left-arrow' ></i></button>
                <div className='slider'>
                    <div style={styleMovement} className='slider_movement'>
                        {
                            imgData.map(image => (
                                <div key={image.id} className='slider_imgContainer'>
                                    <img className='slider_img' src={image.img} alt="" />
                                </div>
                            ))

                        }

                    </div>
                </div>
                <button onClick={handleNext} className='slider_btn slider_btn-left'><i className='bx bxs-right-arrow'></i></button>
            </div>
        </section>
    )
}

export default Briefcase