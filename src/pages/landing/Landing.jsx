import { Button } from "../../components";
import Booking from "../../components/Booking";
import styles, { layout } from "../../style";
import { countries, features, nuggets } from "../../constants";
import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import { MdPersonAddAlt } from "react-icons/md";
import './Landing.css'
import { TbAdjustmentsHorizontal, TbWorld } from "react-icons/tb";
import { BiMap, BiSearch } from "react-icons/bi";

import { Dropdown } from 'primereact/dropdown';

import { Carousel } from "primereact/carousel";
import { InputText } from "primereact/inputtext";
import { GrMapLocation } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Calendar } from 'primereact/calendar';


const Landing = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [date, setDate] = useState(null);
  const heigth = window.innerHeight
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 6,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    }
  ];
  const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex  flex-row w-full  ${index !== features.length - 1 ? "mb-3" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px]  ${styles.flexCenter} text-yellow-400`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ">
        <h4 className="font-poppins  text-black text-[16px] font-semibold leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[12px] leading-[20px]">
          {content}
        </p>
      </div>
    </div>
  );
  const CarouselTemplate = (nugget) => (
    <div className="flex w-[400px] h-[200px] shadow-xl border rounded-[15px]  bg-white mx-3 " >
      <img src={"/src/assets/preview-10.jpg"} alt="billing" className="w-[40%] h-[100%] object-cover" />
      <div className="w-full">
        <div className='text-center mt-14'>
          <p className='font-bold text-black' > {nugget.name} </p>
          <p className='text-[10px] text-black/30 flex justify-center mt-2' > <GrMapLocation size={"10px"} className='mr-2' />  {nugget.location} </p>
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
      </div>

    </div>
  );
  return (

    <div className="mt-[75px] w-screen relative">
      <section id="features" className={`h-screen w-full   relative flex items-end justify-center bgStart text-center my-4`}>
        <div className="z-20 w-[90%] mb-[90px]">
          <h2 className="text-white text-[30px] font-bold text-center uppercase mt-5">
            Find the best beauty professional?
          </h2>
          <div className=" rounded-[15px] bg-white lg:justify-between mt-5 lg:flex p-2   grid gap-y-3  ">
            <div className="flex justify-between w-full">
              <div>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" ></i>
                  <InputText placeholder="Service, stylist, Salon" className="max-w-[150px] border-r-1" />
                </span>
              </div>
              <div className="w-[1px] bg-slate-200" > {""} </div>
              <div>
                <span className="p-input-icon-left">
                  <BiMap />
                  <InputText placeholder="Where? " className="max-w-[150px]" />
                </span>
              </div>
            </div>
            <div className="lg:flex md:flex grid gap-y-3 lg:justify-between md:justify-between">
              <div>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                  placeholder="Select a City" className=" mr-2 border-black" />
              </div>
              <div>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                  placeholder="Best Match" className=" bg-yellow-500 border-none text-white mr-2" />
              </div>
              <div>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                  placeholder="Best Match" className=" bg-yellow-500 border-none text-white mr-2" />
              </div>
              <div>
                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon className=" max-w-[200px] mr-2 calendarYellow bg-yellow-500 rounded" />

              </div>
              <div>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                  placeholder="Extra" className=" mr-2 border-black" />
              </div>

            </div>

            <div className="lg:flex lg:mt-3 md:flex sm:block justify-between">
              <div className="flex min-w-[100px] justify-center ">
                <span className="flex items-center">
                  <TbAdjustmentsHorizontal />
                  <p>Filter</p>
                </span>
              </div>
              <div className="flex items-center justify-center text-yellow-400 mr-2 ">
                <BiSearch size={"32px"} />
              </div>

            </div>

          </div>
        </div>
        <div className="w-full h-full absolute top-0 right-0 bg-primary/20 z-10  ">

        </div>
      </section>
      <section id="features" className="mt-16 relative px-6">
        <div className=" absolute top-0 right-2">
          <div className="w-[40px] h-[40px]  mb-3 text-center rounded-[50%] bg-primary flex justify-center items-center  text-white">
            <TbWorld size={"32px"} />
          </div>
          <div className="w-[40px] h-[40px] text-center rounded-[50%] bg-yellow-500 flex justify-center items-center  text-white">
            <MdPersonAddAlt size={"32px"} />
          </div>
        </div>
        <div className="  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full place-items-center ">
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} available={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} available={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} available={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />
          <Booking img1={"/src/assets/avatar2.jpg"} img2={"/src/assets/avatar3.png"}
            location={"1841 Hardman Road , Vermont"} name={"Brice Vaughn "} booknow={true} commingDate={"01:27:00 min"} />


        </div>
        <div className="my-10 flex justify-center">
          <Button text={"Load more"} bgColor={"bg-primary"} textColor={"text-white"} additionalStyle={"px-10 text-[25px]"} />
        </div>
      </section>
      <section id="features" className="flex justify-center p-16 md:p-8 mt-16">
        <div className="w-[90%] bg-white shadow-2xl  lg:px-[50px] px-2 py-9">
          <h2 className="text-primary text-[40px] font-bold text-center mt-5">
            Adversiting
          </h2>
          <h2 className={`${styles.heading2} text-center my-4`}>
            Nuggets of our selection
          </h2>
          <div className="card" >
            <Carousel circular value={nuggets} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="text-primary" itemTemplate={CarouselTemplate} />

          </div>
        </div>
      </section>
      <section id="features" className="flex justify-center">
        <div className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingY} w-[95%] sm:text-center`}>
          <div className={layout.sectionImg}>
            <img src={"/src/assets/verctor_mage.png"} alt="billing" className="w-[90%] h-[100%] object-contain" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              A social nectwork that connect expertise and customers
            </h2>
            <div className="w-full ">
              <h4 className="font-poppins  text-black text-[16px] font-semibold leading-[23.4px] mb-1">
                Our commitment
              </h4>
              <p className={`${styles.paragraph}  mt-3 text-[12px]`}>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
              </p>
              <h4 className="font-poppins  text-black text-[16px] font-semibold leading-[23.4px] mb-1 mt-3">
                The garantie at the customer
              </h4>
              <p className={`${styles.paragraph}  mt-3 text-[12px]`}>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
              </p>
              <h4 className="font-poppins  text-black text-[16px] font-semibold leading-[23.4px] mb-1 mt-3">
                The garantie at the provider
              </h4>

              <p className={`${styles.paragraph}  mt-3 text-[12px]`}>
                With the right credit card, you can improve ing money. But with hundreds
                of credit cards on the market.
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
              </p>
            </div>


            <Button styles={`mt-10`} />
          </div>
        </div>
      </section>
      <section id="features" className="flex justify-center">
        <div className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingY} w-[95%]`}>
          <div className={`${layout.sectionImg} flex-col `}>
            <h2 className={`${styles.heading2} mb-3`}>
              A social nectwork that connect expertise and customers
            </h2>
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
          <div className={layout.sectionImg}>
            <img src={"/src/assets/verctor_mage.png"} alt="billing" className="w-[90%] h-[100%] object-contain" />
          </div>
        </div>


      </section>
      <section id="features" className="flex justify-center lg:mb-32 sm:mb-16 mb-8  ">
        <div className="w-[90%] bg-white shadow-2xl md:px-16 lg:px-[200px] px-6 py-9">
          <h2 className={`${styles.heading2} text-center`}>
            Find your beauty specialist by city
          </h2>
          <div className="  grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">

            {countries.map((country, index) => (
              <div key={index} className="flex p-3" >
                <AiOutlineRight size={"24px"} className="text-primary" />
                <span className="md:text-sm"> {country.name}</span>
              </div>
            ))}
            {countries.map((country, index) => (
              <div key={index} className="flex p-3" >
                <AiOutlineRight size={"24px"} className="text-primary" />
                <span className="md:text-sm">{country.name}</span>
              </div>
            ))}
            {countries.map((country, index) => (
              <div key={index} className="flex p-3" >
                <AiOutlineRight size={"24px"} className="text-primary" />
                <span>{country.name}</span>
              </div>
            ))}
            {countries.map((country, index) => (
              <div key={index} className="flex p-3" >
                <AiOutlineRight size={"24px"} className="text-primary" />
                <span>{country.name}</span>
              </div>
            ))}
            {countries.map((country, index) => (
              <div key={index} className="flex p-3" >
                <AiOutlineRight size={"24px"} className="text-primary" />
                <span>{country.name}</span>
              </div>
            ))}

          </div>
        </div>

      </section>

    </div>
  );
};

export default Landing;
