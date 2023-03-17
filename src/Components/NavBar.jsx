import React, { useEffect, useState } from 'react'
import './styles/navBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [header, setHeader] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)


    const display = e => {

        e.scrollToTop.setHeader(true)
    }

    const handleOpenMenu = () => setOpenMenu(true)

    const handleCloseMenu = () => setOpenMenu(false)
    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false)

    useEffect(() => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"))
    }, [checked])

    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    }

    const [click, setClick] = useState(false)

    const clickTheme = () => {
        if (click === false) {
            setClick(true)
            toggleThemeChange()
        } else {
            setClick(false)
            toggleThemeChange()
        }
    }


    return (
        <div>
            <header className={`header ${header && 'headerChange'}`}>
            <Link smooth={true} spy={true} offset={0} duration={500} to='home'><h1 className='title_header'>Jeremi</h1></Link>

                <div className='changeTheme'>
                    <i className='bx icon_theme bxs-sun'></i>
                    <div className='toggle'>
                        <div onClick={clickTheme} className={`ball ${click && 'ball_active'}`}></div>
                    </div>
                    <i className='bx icon_theme bxs-moon'></i>
                </div>

                <ul className='navBar_info'>
                    <Link smooth={true} spy={true} offset={0} duration={500} to='home'><li>Home</li></Link>
                    <Link smooth={true} spy={true} offset={0} duration={500} to='aboutMe'><li>Acerca de Mi</li></Link>
                    <Link smooth={true} spy={true} offset={0} duration={500} to='skills'><li>Habilidades</li></Link>
                    <Link smooth={true} spy={true} offset={-150} duration={500} to='briefcase'><li>Proyectos</li></Link>
                    <Link smooth={true} spy={true} offset={0} duration={500} to='contact'><li>Contáctame</li></Link>
                </ul>

                <div className='menuPhone'>
                    <i onClick={handleOpenMenu} className='bx icon_menu bx-menu'></i>
                    <div className={`modal_menu ${openMenu && 'modal_menu-visible'}`}>
                        <i onClick={handleCloseMenu} className='bx menu_close bx-x'></i>
                        <ul className='menu_phone'>
                            <Link smooth={true} spy={true} offset={0} duration={500} to='home'><li>Home</li></Link>
                            <Link smooth={true} spy={true} offset={0} duration={500} to='aboutMe'><li>Acerca de Mi</li></Link>
                            <Link smooth={true} spy={true} offset={0} duration={500} to='skills'><li>Habilidades</li></Link>
                            <Link smooth={true} spy={true} offset={-150} duration={500} to='briefcase'><li>Proyectos</li></Link>
                            <Link smooth={true} spy={true} offset={0} duration={500} to='contact'><li>Contáctame</li></Link>
                        </ul>
                    </div>

                </div>


            </header>


        </div>
    )
}

export default NavBar