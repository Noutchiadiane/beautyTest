import { useState } from 'react';

import { Dialog } from '@headlessui/react'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { SlBasket } from 'react-icons/sl';
import Button from './Button';
export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  // eslint-disable-next-line react/prop-types
  const NavButton = ({ title, customFunc, icon, color, number }) => {
    return (
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full  "
      >
        {number && <div
          className="absolute flex  bg-white justify-center text-black font-bold items-center rounded-full h-4 w-4 text-[10px] right-0 top-0"
        >
          {number}
        </div>}

        {icon}
      </button>

    );
  };


  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50 bg-black text-white">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineBars className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="text-sm font-semibold flex items-center text-primary">Home</div>
            <div className="text-sm font-semibold flex items-center text-white">Client account </div>
            <div className="text-sm font-semibold flex items-center text-white">Professional account </div>
            <div className="text-sm font-semibold flex items-center text-white">Contact Us</div>
            <div className="text-sm font-semibold flex items-center text-white">Login</div>
            <div className='lg:flex lg:gap-x-4'>
              <Button text="Post a project " bgColor="bg-white" textColor={"text-primary"} />
              <NavButton title="Notification" number="32" color={"text-white"} icon={<SlBasket size={"32px"} />} />
              <NavButton title="Notification" color={"text-white"} icon={<FiShoppingBag size={"32px"} />} />

            </div>
          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed top-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineClose size={"32px"} />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="text-sm font-semibold flex items-center text-primary">Home</div>
                  <div className="text-sm font-semibold flex items-center text-white">Client account </div>
                  <div className="text-sm font-semibold flex items-center text-white">Professional account </div>
                  <div className="text-sm font-semibold flex items-center text-white">Contact Us</div>
                  <div className="text-sm font-semibold flex items-center text-white">Login</div>
                  <div> <Button text="Post a project " bgColor="bg-white" textColor={"text-primary"} />
                  </div>
                  <div className='gap-x-3 text-white'>
                    <NavButton title="Notification" number="32" color={"text-white"} icon={<SlBasket size={"32px"} />} />
                    <NavButton title="Notification" color={"text-white"} icon={<FiShoppingBag size={"32px"} />} />

                  </div>

                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>


    </div>



  )
}