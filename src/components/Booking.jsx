
import { GrMapLocation } from 'react-icons/gr';
import { BsCalendarCheck, BsCalendarX, BsInstagram } from 'react-icons/bs';
import { AiFillStar, AiOutlineClockCircle, AiOutlineYoutube } from 'react-icons/ai';
import Button from './Button';
export default function Booking({ location, name, commingDate, img1, img2, available,booknow }) {




  return (
    <div className="relative isolate rounded-b-[15px]  shadow-2xl overflow-hidden w-[250px] bg-white m-3  ">
      <div>
        <img
          className="w-full h-[150px] object-cover"
          src={`${img1} `}
          alt=""
        />
      </div>
      <div className='text-center mt-14'>
        <p className='font-bold text-black' > {name} </p>
        <p className='text-[10px] text-black/30 flex justify-center mt-2' > <GrMapLocation size={"10px"} className='mr-2' />  {location} </p>
      </div>
      <div className='text-yellow-500 flex justify-center mt-2 '>
        <AiFillStar size={"16px"} />
        <AiFillStar size={"16px"} />
        <AiFillStar size={"16px"} />
        <AiFillStar size={"16px"} />
        <AiFillStar size={"16px"} />
        <p className='font-bold text-black text-[14px] ml-2' >5.0</p>
        <p className='text-sm text-black/30 text-[8px] ml-2' > {"(46)"} </p>
      </div>
      <div className='flex justify-between  items-center text-black/30 px-5'>
        <div className='flex justify-between'>
          <BsCalendarCheck size={"16px"} />
          <p className='text-[12px] ml-3'>Avialable</p>
        </div>
        <div className='w-[2px] h-[16px] bg-black/30'>
          <span>{""} </span>
        </div>
        <div className='flex justify-between'>
          <BsCalendarX size={"16px"} />
          <p className='text-[12px] ml-3' >Avialable</p>
        </div>

      </div>

      {available && <div className='flex justify-between mt-3 mb-3 items-center text-black/30 px-2'>
        <div>
          <div className='flex justify-between text-black'>
            <AiOutlineClockCircle size={"16px"} />
            <p className='text-[12px] font-bold ml-1'>Coming Soon</p>
          </div>
          <p className='text-[12px] text-center text-primary' > {commingDate} </p>
        </div>

        <Button text="See Avialable" bgColor="bg-primary" textColor={"text-white"} />

      </div>}
      {booknow && <div className='flex justify-center mt-3 mb-3'>
        <Button text="Book Now " bgColor="bg-primary" textColor={"text-white"} />
      </div>}

      <img
        className="w-[100px] h-[100px] rounded-full absolute top-[100px] right-[32%] shadow-xl border-white border-2"
        src={`${img2} `}
        alt=""
      />
    </div>
  )
}
