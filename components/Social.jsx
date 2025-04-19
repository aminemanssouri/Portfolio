import Link from 'next/link';
import React from 'react'

import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter,} from "react-icons/fa"

const socials=[
    {
    icon:<FaGithub/>,path:'https://github.com/aminemanssouri'
        },
        {
            icon:<FaFacebook/>,path:'https://www.facebook.com/Amine Kech/'
                },
                {
                    icon:<FaLinkedinIn/>,path:'https://www.linkedin.com/in/amine-manssouri-262497244/'
                        },
                        {
                            icon:<FaTwitter/>,path:'https://x.com/amineManssouri2'
                                },

];
const Social = ({containerStyles,iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return<Link key={index} href={item.path} className={iconStyles} path={item.path}>
            {item.icon}
        </Link>
    })}
  </div>
}

export default Social
