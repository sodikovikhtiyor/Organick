import React from 'react'
import './Sidebar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Sidebar = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Pages',
        path: '/pages',
        icon: <KeyboardArrowDownIcon className='sideIcon'/>,
    },
    {
        title: 'Shop',
        path: '/shop'
    },
    {
        title: 'Project',
        path: '/project'
    },
    {
        title: 'News',
        path: '/news'
    },

]