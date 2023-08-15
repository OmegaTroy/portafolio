import React from 'react'
let today = new Date()


export const Footer = () => {
  return (
    <footer className='bg-Cuarto text-center text-FV'>
      &copy; {today.getFullYear()} Julian iocco. All rights reserved.
    </footer>
  )
}
