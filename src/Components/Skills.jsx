import React from 'react'
import './styles/skills.css'

const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <div className='text_skills'>
                <h1 className='title_skills'>Habilid<span>ades</span></h1>
                <h3 className='sub_title_skills'>¡Conoce las habilidades que he desarrollado!</h3>
            </div>
            <div className='skills_container'>
                <div className='card_skill'>
                    <i className='bx icon_skill bxl-html5'></i>
                    <h3>HTML</h3>
                    <p>Gran conocimiento para estructurar y maquetar tu sitio web</p>
                </div>

                <div className='card_skill'>
                    <i className='bx icon_skill bxl-css3' ></i>
                    <h3>CSS</h3>
                    <p>Buena experiencia y manejo para dar estilo los componentes para tu sitio web, diseños estéticos y completamente responsives</p>
                </div>

                <div className='card_skill'>
                    <i className='bx icon_skill bxl-react' ></i>
                    <h3>REACT JS</h3>
                    <p>Especializado en esta librería para maquetar y añadir funcionalidades a tu sitio web para ofrecer un producto de mayor calidad.</p>
                </div>

                <div className='card_skill'>
                    <i className='bx icon_skill bxl-javascript' ></i>
                    <h3>JAVASCRIPT</h3>
                    <p>Basto conocimiento del motor y funcionalidades para cubrir tus necesidades</p>
                </div>
            </div>
        </section>
    )
}

export default Skills