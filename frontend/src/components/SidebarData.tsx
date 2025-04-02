import React from 'react';
import { MdNumbers } from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Numbers',
    path: '/numbers',
    icon: <AiIcons.AiOutlineFieldNumber/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'Find Nth Digit',
            path: '/find_digit',
            icon: <MdNumbers/>
        },
        {
            title: 'Fibonacci Sequence',
            path: '/fibonacci_sequence',
            icon: <MdNumbers/>
        }
    ]
  },
  {
    title: 'Classic Algorithms',
    path: '/classic_algorithms',
    icon: <AiIcons.AiFillCode/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'Graph from links',
            path: 'graph_links',
            icon: <AiIcons.AiFillForward />
        }
    ]
  }
]