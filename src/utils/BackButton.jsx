import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
    return (
        <Link className='backButton' to="/">
            <lord-icon
                src="https://cdn.lordicon.com/jzzzcrxv.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "50px", height: "50px" }}>
            </lord-icon>
            Go back
        </Link>
    )
}

export default BackButton
