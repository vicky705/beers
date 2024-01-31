import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="copy-div">
                <p>&copy; Copyright - {new Date().getFullYear()}</p>
                <p>Xtracap Fintech India Pvt. Ltd.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
