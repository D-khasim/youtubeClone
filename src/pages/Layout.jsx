import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Display from '../components/display/Display'
import './layout.css'

const Layout = ({ sidebar }) => {
    const [categery, setCategery] = useState(0);
    return (
        <div>
            <div className='container'>
                <Sidebar sidebar={sidebar} categery={categery} setCategery={setCategery} />
                <div className={`content ${sidebar?'':'max-content'}`}>
                    <Display categery={categery} />
                </div>
            </div>
        </div>
    )
}

export default Layout