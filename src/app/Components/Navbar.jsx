import React from 'react'
import Button from './button'
import DrawerComp from './Drawer'

const NavbarComp = () => {
    return (
        <div className=' font-mono '>

            <div className=" md:flex justify-end gap-20 hidden  mx-10 py-5">
                <ul className=' flex text-xl  gap-5 lg:gap-10 items-center'>
                    <li className=' hover:text-pink-500 cursor-pointer'>Home</li>
                    <li className=' hover:text-pink-500 cursor-pointer'>About-Us</li>
                    <li className=' hover:text-pink-500 cursor-pointer'>Cources</li>
                    <li className=' hover:text-pink-500 cursor-pointer'>Our Teachers</li>
                    <li className=' hover:text-pink-500 cursor-pointer'>FAQ</li>
                </ul>

                <div>
                    <Button title="Contact-us" />
                </div>
            </div>
                
                   
                
        </div>
    )
}

export default NavbarComp
