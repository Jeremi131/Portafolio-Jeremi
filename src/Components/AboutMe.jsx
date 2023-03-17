import React from 'react'
import './styles/aboutMe.css'

const AboutMe = () => {
    return (
        <section id='aboutMe' className='aboutMe'>
            <h1 className='title_aboutMe'>About <span>Me</span> </h1>
            <div className='aboutMe_card'>
                <div className='info_container'>
                    <h1 className='presentation'>¡Hola! soy Jeremi Castellano</h1>
                    <h4 className='text_aboutMe'>Desarrollador web, apasionado de la programacion, dedicado y responsable. Me encantaria formar parte de tu equipo, si quieres saber mas acerca de mi o si tienes alguna duda, no olvides contactarme a traves de mis redes sociales o por un mensaje a ttraves del formulario de contacto. ¡Estare esperando tu mensaje con muchas ansias! </h4>
                </div>
                

                <div className='education'>
                    <h3><i className='bx icon_about bxs-book-bookmark'></i>Educacion</h3>
                    <div className='info_education'>
                        <span className='info_skills'>ACADEMLO (2022 - Actualidad)</span>
                        <p>Full-Stack Developer</p>
                    </div>

                    <div className='info_education'>
                        <span className='info_skills'>U.E.N 'Doña Virginia Perez de Oramas' (2014 - 2019)</span>
                        <p>Bachiller en ciencias</p>
                    </div>
                </div>
                <div className='experience'>
                    <h3><i className='bx icon_about bxs-extension'></i>Experiencia</h3>
                    <div className='info_experience'>
                        <span className='info_skills'> Academlo 2022 - Actualidad</span>
                        <p>Desarrollo de aplicaciones web</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='info_dev'>
                <div className='info_dev_card'>
                    <span className='quantity'>+200</span>
                    <p className='info_quantity'>Horas de Practica</p>
                </div>

                <div className='info_dev_card'>
                    <span className='quantity'>+8</span>
                    <p className='info_quantity'>Proyectos terminados</p>
                </div>
            </div>
            <a className='btn_cv' href="../../public/images/cv.pdf" download="Curriculum Vitae Jeremi Castellano.pdf" >Descargar CV<i className='bx icon_cv bx-down-arrow-alt'></i></a>
        </section>
    )
}

export default AboutMe