import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/Profile',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },
    {
        title: 'Chat',
        path: '/Chat',
        icon: <BsIcons.BsFillChatTextFill/>,
        cName: 'nav-text'
    }
]


