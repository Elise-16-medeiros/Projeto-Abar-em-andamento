import React from 'react';
import './Navbar.css';
import { MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { lightBlue } from '@mui/material/colors';


function Navbar() {
    return (

        <MDBNavbar expand='lg' light style={{ backgroundColor: '#DE3163' }}>
            <MDBContainer fluid>
                <Link href="#"><HomeIcon sx={{ color: lightBlue[50], fontSize: 30 }}/></Link>
                <Link href="#"><AccountCircleIcon sx={{ color: lightBlue[50], fontSize: 30 }} /></Link>
                <Link href="#"><ChatIcon sx={{ color: lightBlue[50], fontSize: 30 }}/></Link>
                <Link href="#"><PeopleAltIcon sx={{ color: lightBlue[50], fontSize: 30 }} /></Link>
                <form className='d-lg-inline-flex flex-row input-group w-auto'>
                    <input type='search' className='form-control' aria-label='Search' />
                    <button className='btn btn-outline-white' type='button'>
                        Perquisar
                    </button>
                </form>
                <Link href="#"><LogoutIcon sx={{ color: lightBlue[50], fontSize: 30 }} /></Link>
            </MDBContainer>
        </MDBNavbar>




    );
}

export default Navbar;