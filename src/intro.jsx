import React from 'react'
import Aside from './aside';
import Header from './header';
import About from './about';


const Intro = () => {
    return (
        <div className='body'>
            <Aside />
            <main className='main'>
                <Header />
                <About />
            </main>

        </div>
    )
}

export default Intro;