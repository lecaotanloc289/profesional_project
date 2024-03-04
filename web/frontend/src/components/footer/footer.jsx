import React from 'react'
import Container from '@mui/material/Container'
import './footer.scss'
import { Grid, Link, Typography, Unstable_Grid2 } from '@mui/material'
import Stack from '@mui/material/Stack'
import SocialMedia, { SocialMediaFooter } from '../items/SocialMedia'
import Elma from '../items/Elma'
export function Copyright() {
    return (
        <Typography variant="subtitle1" className="copyright">
            <Link href="/" underline="none" color={'black'}>
                Elma © Copyright 2024, Inc. All rights reserved
            </Link>
            {' '}
        </Typography>
    )
}

export function Footer1() {
    return (
        <Stack direction={'row'} spacing={40}>
            <Elma />
            <Stack className="footer-menu" direction={'row'} spacing={10}>
                <Stack>
                    <p className='h7 regular'>First Menu</p>
                    <Link className='h8 regular' >Feature</Link>
                    <Link className='h8 regular' href="">Enterpise</Link>
                    <Link className='h8 regular' href="">Securiry</Link>
                    <Link className='h8 regular' href="">Customer Stories</Link>
                    <Link className='h8 regular' href="">Pricing</Link>
                    <Link className='h8 regular' href="">Demo</Link>
                </Stack>
                <Stack>
                    <p className='h7 regular'>Second Menu</p>
                    <Link className='h8 regular' href="">Engineering</Link>
                    <Link className='h8 regular' href="">Financial Services</Link>
                    <Link className='h8 regular' href="">Sales</Link>
                    <Link className='h8 regular' href="">IT</Link>
                    <Link className='h8 regular' href="">Customer Support</Link>
                    <Link className='h8 regular' href="">Human Resources</Link>
                    <Link className='h8 regular' href="">Media</Link>
                </Stack>
                <Stack>
                    <p className='h7 regular'>Third Menu</p>
                    <Link className='h8 regular' href="">Tips</Link>
                    <Link className='h8 regular' href="">Blog</Link>
                    <Link className='h8 regular' href="">Event</Link>
                    <Link className='h8 regular' href="">Certified Program</Link>
                    <Link className='h8 regular' href="">Help Center</Link>
                    <Link className='h8 regular' href="">API</Link>
                    <Link className='h8 regular' href="">Download Template</Link>
                </Stack>
                <Stack>
                    <p className='h7 regular'>Fourth Menu</p>
                    <Link className='h8 regular' underline="hover">About Us</Link>
                    <Link className='h8 regular' underline="hover">Leadership</Link>
                    <Link className='h8 regular' underline="hover">News</Link>
                    <Link className='h8 regular' underline="hover">Media Kit</Link>
                    <Link className='h8 regular' underline="hover">Career</Link>
                    <Link className='h8 regular' underline="hover">Documentation</Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default function Footer() {
    return (
        <div>
            <div className="footer-top">
                <Container className="footer" maxWidth="lg">
                    <Container className="footer-1 ">
                        <Footer1 />
                    </Container>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container className="footer" maxWidth="lg">
                    <Container className="footer-2">
                        <Copyright />
                        <SocialMediaFooter />
                    </Container>
                </Container>
            </div>
        </div>
    )
}
