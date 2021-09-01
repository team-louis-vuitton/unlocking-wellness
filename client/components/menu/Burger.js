import React from 'react';

const Burger = ({ menuOpen, setMenuOpen}) => {

  return (
    <div
      onClick={ () => setMenuOpen(!menuOpen) }
      className='burger'
      style={ menuOpen ?
        {background: '#EFFFFA'} :
        {background: 'transparent'}
      }
    >
      |||
      <div
        style={ menuOpen ?
          {
            transform: 'rotate(45deg)',
            background: '#000'
          } :
          {transform: 'rotate(0)'}
        }
      />
      <div
        style={ menuOpen ?
          { opacity: 0 } :
          { opacity: 1 }
        }
      />
      <div
        style={ menuOpen ?
          { transform: 'rotate(-45deg)',
            background: '#000'
          } :
          {transform: 'rotate(0)'}
        }
      />
    </div>
  )
}

export default Burger;