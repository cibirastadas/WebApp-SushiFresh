import React, {useState, useEffect}  from 'react'
import NavBarLinks from './NavBarLinks/NavBarLinks'
import classes from "./NavBar.module.css"
import {TiThMenu} from "react-icons/ti"
import {MdClose} from "react-icons/md"
import NavBarLogo from "../Logo/Logo"
import Cookies from "js-cookie"
const NavBar = () => {
    const [ click, setClick ] = useState(false)/* Atidaromas uzdaromas hamburger komponentas */

    const [ dropDown, setDropDown ] = useState(false)/* Isskleidziamas meniu */

    const [ userDrop, setUserDrop ] = useState(false)/* Isskleidziamas meniu */

    const [login, setLogin] = useState(false)

    const closeMobileMenu = () => setClick(false)/* Uzdaromas mobile rezimas */

    const [userCookie, setUserCookie] = useState("") /* Patikrinamas cookie */

    const handleClick =()=>setClick(!click)/* Atidaromas uzdaromas hamburger komponentas */

   
    const handleLogin = () =>{
        closeMobileMenu()
        setLogin(!login)
    }
    
    const onMouseEnter = (e) =>{
        if(window.innerWidth<960){
            e==="meniu" ? setDropDown(false) : setUserDrop(false)
        }else{
            e==="meniu" ? setDropDown(true) : setUserDrop(true)
        }
    }

    const onMouseLeave = () =>{
        if(window.innerWidth<960){
            setDropDown(false)
            setUserDrop(false)
        }else{
            setDropDown(false)
            setUserDrop(false)
        }
    }

    const readCookie=()=>{
        setUserCookie(Cookies.get('user'))
    }

    useEffect(()=>{
        readCookie();
    },[])

    const handleRemoveCookie =()=>{
        Cookies.remove("user")
        setUserCookie("")
    }

        return (
            <div className={classes.navBarContainer}>
                <NavBarLogo 
                    style={{logo : "logoMargin"}}
                />
                <NavBarLinks 
                    click={click} 
                    closeMobileMenu={closeMobileMenu} 
                    dropDown={dropDown} 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                    login={login}
                    handleLogin={handleLogin}
                    handleRemoveCookie={handleRemoveCookie}
                    userCookie={userCookie}
                    readCookie={readCookie}
                    userDrop={userDrop}
                />
                <div className={classes.menuIcon}
                    onClick={handleClick}>
                    {click ? <MdClose /> : <TiThMenu/> }
                </div>
            </div>
        )
    }
export default NavBar