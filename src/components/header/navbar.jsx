// import './navbar.css'
import img1 from '../../img/head.png'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
  return (
    // <div className="header-background">
    //     <div className="header-part">
    //         <div className="container">
    //             <div className="logo">
    //                 <h2>Лого</h2>
    //                 <h2>Название</h2>
    //             </div>
    //             <div className="header-content">
    //                 <div className="head-info">
    //                     <h1>Математика ар дайым!</h1>
    //                     <h2>Математика онлайн китеби!</h2>
    //                     <p>Сана Онлайн - бул математика боюнча онлайн китеби. Бул баракчада 7-10 класстардын атайын тандлаган маалыматтары гана менен. </p>
    //                     <button onClick={() => {navigate('/learn')}}>Окуу</button>
    //                 </div>
    //                 <div className="head-img">
    //                     <img src={img1} alt="header-img"/>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className='w-full'>
        <div className='w-full lg:px-32 md:px-32 sm:px-20 py-5 bg-[#452A80] text-[#fff] rounded-b-3xl'>
          <div className='w-full flex flex-col items-center mb-5'>
            <h3 className='leading-3'>Лого</h3>
            <h4>Название</h4>
          </div>

          {/* xl:bg-green-500 lg:bg-red-600 md:bg-slate-500 sm:bg-yellow-400 xs:bg-blue-500 */}

          <div className='w-full flex 2xl:px-20 xl:px-20  lg:px-0 md:px-14 sm:px-12 xs:px-14  lg:flex-row md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center xs:flex-col-reverse xs:items-center'>
            <div className='lg:w-[50%] md:w-full py-5 lg:block md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center xs:flex xs:flex-col xs:items-center'>
              <h2 className='text-4xl tracking-wide font-semibold lg:text-left md:text-center sm:text-center xs:text-center'>Математика ар дайым!</h2>
              <h3 className='text-2xl font-normal lg:text-left md:text-center sm:text-center xs:text-center'>Математика онлайн китеби!</h3>
              <p className='font-light text-bs lg:text-left md:text-center sm:text-center xs:text-center'>Сана Онлайн - бул математика боюнча онлайн китеби. Бул баракчада 7-10 класстардын атайын тандлаган маалыматтары гана менен. </p>
              <div onClick={() => {navigate('/learn')}} className='bg-[#D78100] inline-block px-16 py-2 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300'>Окуу</div>
            </div>

            <div className='lg:w-[50%] md:w-full md:flex md:justify-center'>
              <img className='w-[350px] h-[300px] ml-5' src={img1} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar