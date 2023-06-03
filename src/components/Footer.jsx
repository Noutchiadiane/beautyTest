
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { footerLinks } from '../constants';
export default function Footer() {


  // eslint-disable-next-line react/prop-types
  const FooterStore = ({ text1, iconLink, text2 }) => {
    return (
      <div

        className="flex justify-between rounded p-2 items-center w-[180px] bg-white/30  "
      >
        <img
          className="w-12 h-12"
          src={`${iconLink} `}
          alt=""
        />
        <div>
          <p className=" text-sm text-white">
            {text1}
          </p>
          <p className="font-bold text-lg text-white">
            {text2}
          </p>
        </div>
      </div>

    );
  };

  return (
    <div className="relative isolate overflow-hidden bg-black py-16 " style={{ backgroundColor: 'black' }}>
      <div className="mx-auto max-w-7xl px-9 lg:px-10">
        <div className="mx-auto grid  grid-flow-row-dense max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">

          <div className="col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">LATRICE</h2>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec massa vitae mauris pellentesque consectetur eu sit amet dui. Quisque convallis facilisis eros, et convallis lectus
              luctus quis. Praesent porta, neque sed volutpat pretium,
              magna augue porta sapien, sed dignissim magna
            </p>

          </div>
          <div className="text-white  ">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>

                <ul className="list-none ">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-semibold text-[12px] leading-[16px] text-white hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                        }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>



          <div className="  text-white sm:grid-cols-2 lg:pt-2 col-span-2 p-x-8">
            <h1 className="font-bold text-3xl mb-10">Application</h1>
            <div className='flex justify-between'>
              <FooterStore text1={"GET IN ON THE "} text2={"Google Play"} iconLink={"/src/data/download-removebg-preview.png"} />

              <FooterStore text1={"Download in the "} text2={"App Store"} iconLink={"/src/data/647529-removebg-preview.png "} />
            </div>
            <div className="flex justify-around text-yellow-400 mt-6">
              <CiFacebook size={"32px"} />
              <AiOutlineYoutube size={"32px"} />
              <BsInstagram size={"32px"} />
              <CiLinkedin size={"32px"} />


            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-10  text-center text-sm leading-6 text-white">© 2023 Latrice, Inc. All rights reserved.</p>
      </div>

    </div>
  )
}
