import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Img from '../../Components/Assets/home.jpg'
import SingleCards from '../../lib/product_cards/SingleCards';
import Filter from '../../lib/product_cards/Filter'
function page() {

  return (
    <>
      <Helmet>
        <title>Booking</title>
        <meta name='welcome to booking page book hotel and more' />
      </Helmet>

      <div>


        <div className="book-home  ">

          <div className='h-[70vh] overflow-hidden relative rounded-b-[40px] '>
            <div className=" w-full">
              <div className="  w-full">
                <LazyLoadImage
                  src={Img}
                  width="100%"
                  className='blur-sm select-none'
                />

              </div>

              <div className="absolute booking-gradient bg-gradient-to-b top-[50%] left-[50%] w-full h-full  translate-x-[-50%] translate-y-[-50%] ">
                <div className="w-full relative h-full">
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <b className="fw-bold text-8xl text-sky-100">
                      Book Hotels and more...
                    </b>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* filter slider */}


          <Filter />


        </div>

        {/* view all results */}

        {/* <div className="results px-5">

          <div className="mt-5">
            <b className="fw-bold">
              View results
            </b>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-2">

            <div className="product-img relative rounded-lg py-2  shadow-sm">

              <Slider {...single_product} className='relative'>
                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px]  rounded-lg'
                />

                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px] rounded-lg'
                />


                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px] rounded-lg'
                />

                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px] rounded-lg'
                />
              </Slider >

              <div className="single-slider-info">
                <div className="flex justify-between px-2  fw-bold">
                  <b className="fw-bold hover:text-sky-500 cursor-pointer">
                    Gulshan dhaka Bangladesh
                  </b>
                  <span className='flex items-center '><CiStar className='fw-bold text-black text-[23px] px-1' />5.0</span>
                </div>
                <div className="text-sm px-2 text-slate-500">
                  Hosted by shihab
                </div>
                <div className="text-md px-2 flex text-slate-500">
                  <span>Oct 4 to infinite</span>
                </div>

                <div className="text-lg px-2 fw-bold items-center justify-between  flex text-slate-700">
                  <span>Oct 4 to infinite</span>
                  <button className='text-sm border rounded-lg py-1 px-2 fw-300 hover:bg-sky-100  text-sky-400 '>Enroll</button>
                </div>
              </div>
            </div>


            <div className="product-img relative rounded-lg py-2  shadow-sm">

              <Slider {...single_product} className='relative'>
                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px]  rounded-lg'
                />

                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px] rounded-lg'
                />


                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px] rounded-lg'
                />

                <LazyLoadImage
                  src={Img}
                  effect='blur'
                  className='h-[200px] rounded-lg'
                />
              </Slider >

              <div className="single-slider-info">
                <div className="flex justify-between px-2  fw-bold">
                  <Link to="booking-view">  <b className="fw-bold hover:text-sky-500 cursor-pointer">
                    Gulshan dhaka Bangladesh
                  </b></Link>

                  <span className='flex items-center '><CiStar className='fw-bold text-black text-[23px] px-1' />5.0</span>
                </div>
                <div className="text-sm px-2 text-slate-500">
                  Hosted by shihab
                </div>
                <div className="text-md px-2 flex text-slate-500">
                  <span>Oct 4 to infinite</span>
                </div>

                <div className="text-lg px-2 fw-bold items-center justify-between  flex text-slate-700">
                  <span>$343 per day</span>
                  <Link to="booking-view">    <button className='text-sm border rounded-lg py-1 px-2 fw-300 hover:bg-sky-100  text-sky-400 '> To Enroll</button></Link>
                </div>
              </div>
            </div>



          </div>







        </div> */}
        <SingleCards />

      </div>
    </>
  )
}

export default page