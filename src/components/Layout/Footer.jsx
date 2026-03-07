import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>
                Portfolio Bruno Sena Dev &copy; {year} React
            </p>
        </footer>
    )
}

export default Footer