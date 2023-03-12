import React, { useState } from 'react'
import './styles/briefcase.css'


const Briefcase = () => {

    const imgData = [
        {
            img: "../../../images/pokeApi.gif",
            id: 1,
            link: "https://pokedex-app-jeremi.netlify.app",
            descripcion: "App que detecta tu ubicacion y brinda el pronostico del clima."
        },
        {
            img: "../../../images/E-commerce.gif",
            id: 2,
            link: "https://e-commerce-react-jc.netlify.app",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../../images/e-commerceJs.gif",
            id: 3,
            link: "https://e-commerce-react-jc.netlify.app",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../../images/quotes.gif",
            id: 4,
            link: "https://e-commerce-react-jc.netlify.app",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../../images/weatherApp.gif",
            id: 5,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../../images/rickAndMorty.gif",
            id: 6,
            link: "https://entregable-6-los-jinetes.netlify.app/#/",
            descripcion: "Tienda virtual hecha en React."
        },
        {
            img: "../../../images/userApp.gif",
            id: 7,
            link: "https://app-users-jeremi.netlify.app",
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