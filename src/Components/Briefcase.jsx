import React, { useState } from 'react'
import './styles/briefcase.css'


const Briefcase = () => {

    const imgData = [
        {
            img: "../../../images/pokeApi.gif",
            id: 1,
            name: 'PokeApi',
            descripcion: "App basada en una Pokedex de la franquicia Pokemon donde se muestra la informacion de cada uno de los Pokemon",
            link: "https://pokedex-app-jeremi.netlify.app"
        },
        {
            img: "../../../images/E-commerce.gif",
            id: 2,
            name:'E-commerce React',
            descripcion: "Tienda virtual hecha con React donde se puede agregar al carrito de compras y sistema de registro y login.",
            link: "https://e-commerce-react-jc.netlify.app"
        },
        {
            img: "../../../images/e-commerceJs.gif",
            id: 3,
            name:'E-commerce HTML y Javascript',
            descripcion: "Tienda virtual hecha en Html y Javascript en grupo con funcion de agregar productos al carrito de compras",
            link: "https://e-commerce-group2a.netlify.app"
        },
        {
            img: "../../../images/quotes.gif",
            id: 4,
            name:'Quotes Random',
            descripcion: "App que muestra frases aleatorias al dar click al boton o al recargar la pagina.",
            link: "https://quotes-jeremi.netlify.app"
        },
        {
            img: "../../../images/weatherApp.gif",
            id: 5,
            name:'Weather App',
            descripcion: "App que detecta tu ubicacion y muestra el pronostico del clima de tu ubicacion.",
            link: "https://weatherappjeremi.netlify.app"
        },
        {
            img: "../../../images/rickAndMorty.gif",
            id: 6,
            name:'Rick and Morty App',
            descripcion: "App que despliega informacion acerca de los personajes de la serie Rick and Morty.",
            link: "https://rick-and-mortyapp.netlify.app"
        },
        {
            img: "../../../images/userApp.gif",
            id: 7,
            name:'Create User App',
            descripcion: "App donde se puede crear y actualizar o eliminar Usuarios a travez de formularios.",
            link: "https://app-users-jeremi.netlify.app"
        },
    ]

    const [imgSelector, setImgSelector] = useState(0)
    const [showHover, setShowHover] = useState(false)

    const display = () =>{
        setShowHover(true)
    }

    const hidden = () =>{
        setShowHover(false)
    }

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
        <section id='briefcase' className='briefcase'>
            <h1 className='title_briefcase'>Mis Proy<span>ectos</span></h1>
            <div className='carousel'>
                <button onClick={handlePrevious} className='slider_btn slider_btn-right'><i className='bx bxs-left-arrow' ></i></button>
                <div className='slider'>
                    <div style={styleMovement} className='slider_movement'>
                        {
                            imgData.map(image => (
                                <div key={image.id} 
                                onMouseEnter={display}
                                onMouseLeave={hidden}
                                className='slider_imgContainer'>
                                    <img className='slider_img' src={image.img} alt="" />
                                    <div className={`image_hover ${showHover  && 'hover-visible'} `}>
                                        <h3 className='name_app' >{image.name}</h3>
                                        <p className='app_description'>{image.descripcion}</p>
                                        <a className='link' href={image.link} target='_blank'>CLICK AQUI PARA VER LA APP</a>
                                    </div>
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