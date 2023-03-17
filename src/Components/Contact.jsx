import React from 'react'
import './styles/contact.css'
import contact from '../../public/images/contactImage.png'

const Contact = () => {

    return (
        <div id='contact' className='contact'>
            <div className='title_container'>
                <hr className='hrOne' />
                <h1 className='title_contact'>Contact<span>ame</span></h1>
                <hr />
            </div>
            <div className='contactImg_container'>
                <img className='contactImg' src={contact} alt="" />
                <h4 className='text_contact'>Puedes contactarme para mas informacion a traves de este formulario o por mis redes sociales y numero telefonico</h4>
            </div>
            <form action="https://formsubmit.co/jeremijared10@gmail.com" method="POST" className='form_contact'>
                <div className='container_inputInfo'>
                    <input className='input_info' type="text" placeholder='Nombre' name='name' />
                    <input className='input_info' type="email" placeholder='Correo' name='email' />
                    <input className='input_info' type="number" placeholder='Numero de Telefono' name='phone' />
                    <input className='input_info' type="text" placeholder='Asunto' name='subject' />
                </div>


                <div className='container_inputMsj'>
                    <textarea className='input_msj' placeholder='Mensaje' name="message" cols="100" rows="5"></textarea>
                    <button className='btn_form' type='submit'>Enviar<i className='bx icon_send bx-mail-send bx-tada'></i></button>
                </div>


                <input type="hidden" name='_next' value='http://localhost:5173' />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    )
}

export default Contact