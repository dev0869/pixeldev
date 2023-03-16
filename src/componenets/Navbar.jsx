import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import LoginLogout from './Login_Logout'
const Navbar = () => {
    return (
        <>

            <Stack direction={'row'} justifyContent={'space-between'} p={3}>
                <Link to={'/'}>
                    <Stack direction={'row-reverse'} alignItems={'center'}>
                    <h1 style={{color:'white'}}>Pixel<span style={{color:'cyan'}}>Dev</span> </h1>
                                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 2000" width="25" height="20"><defs><linearGradient id="a" x1="211.36" y1="719.25" x2="1511.99" y2="2104.3" gradientUnits="userSpaceOnUse"><stop offset=".28" stop-color="#17babd" /><stop offset=".84" stop-color="#63727c" /></linearGradient></defs><title>salt</title><path d="M950 544.53l580.36 1221.34H369.64L950 544.53M950 0L0 2000h1900z" fill="url(#a)" /></svg>
                
                    </Stack>
           
                </Link>
                <Stack direction={'row'} gap={2} >
                    <LoginLogout />
                    <Link to={'/createPost'}>
                        <button className='but' style={{ padding: '8px' }}>create</button></Link>

                </Stack>

            </Stack>

        </>)
}

export default Navbar