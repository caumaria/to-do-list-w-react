import React from 'react'

const NavItem = () => {
  return (
    <li>
      <div style={{
        background: 'white',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        width: '120px',
        height: '110px',
        paddingTop: '1rem'
        }}>
        <div className='icon'
         style={{
            borderRadius: '100%', 
            backgroundColor: '#FF80A6', 
            width: '48px', 
            height: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            index: '1',
            }}>    
            <img src="paw.svg" 
            style={{
                fill: 'white', 
                width: '40px', 
                height: '40px',
                background: 'url(paw.svg) no-repeat',
                backgroundSize: 'contain',
                index: '10',
                }}>
            </img>
        </div>
      <p className='title' style={{
        textTransform:'uppercase',
        color: '#FF80A6',
        fontWeight: 'bold',        
      }}>To-do</p>
      </div>
    </li>
  )
}

export default NavItem
