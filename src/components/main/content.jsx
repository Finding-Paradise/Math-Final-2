import './content.scss'
import block1img from '../../img/girl.png'
import block2img from '../../img/hand.png'
import block3img from '../../img/check.png'
const Content = () => {
    return (
        // <div className="main">
        //     <div className="container">
        //         <div className="main-question">Эмне үчүн Онлайн Китеп?</div>
        //         <div className="blocks">
        //             <div className="cards first">
        //                 <div className="sub-card">
        //                     <img src={block1img} alt="" />
        //                 </div>
        //                 <div className="sub-card-text">
        //                     <h2>Ар дайым жанында</h2>
        //                     <p>Онлайн Китепти ар кайсы жерден колдонсоңуз  болот. Эн башкысы интернет жана уюлдук аппарат же компьютер керек</p>
        //                 </div>
        //             </div>
        //             <div className="cards second">
        //                 <div className="sub-card">
        //                     <img src={block2img} alt="" />
        //                 </div>
        //                 <div className="sub-card-text">
        //                     <h2>Акысыз колдонуу</h2>
        //                     <p>Бул баракчага чексиз жана акысыз кире аласыз</p>
        //                 </div>
        //             </div>
        //             <div className="cards third">
        //                 <div className="sub-card">
        //                     <img src={block3img} alt="" />
        //                 </div>
        //                 <div className="sub-card-text">
        //                     <h2>Тест</h2>
        //                     <p>Ар бир темадан кийин билимди бекмедөө үчун кыска сынактар бар    </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='w-full mb-14'>
            <div className='text-3xl text-center font-semibold mt-10 mb-5'>Эмне үчүн Онлайн Китеп?</div>

            <div className='flex 2xl:px-56 lg:px-32 2xl:gap-20 lg:gap-10 md:gap-10 sm:gap-10 xs:gap-10 lg:items-stretch lg:flex-row md:flex-col md:items-center sm:flex-col sm:items-center xs:flex-col xs:items-center'>

                <div className='lg:w-[calc(100%/3)] md:w-[90%] sm:w-[90%] xs:w-[90%] bg-[#F3F7F5] rounded-lg shadow-md hover:shadow-xl hover:scale-105 ease-in-out duration-300'>
                    <div className='w-full h-[300px] mb-3 flex justify-center items-center'>
                        <img className='w-[150px] h-[200px]' src={block1img} alt="img" />
                    </div>

                    <div className='flex flex-col items-center px-4'>
                        <h3 className='text-2xl text-center'>Ар дайым жанында</h3>
                        <p className='text-lg text-center'>Онлайн Китепти ар кайсы жерден колдонсоңуз  болот. Эн башкысы интернет жана уюлдук аппарат же компьютер керек</p>
                    </div>
                </div>

                <div className='lg:w-[calc(100%/3)] md:w-[90%] sm:w-[90%] xs:w-[90%] bg-[#F3F7F5] rounded-lg shadow-md hover:shadow-xl hover:scale-105 ease-in-out duration-300'>
                    <div className='w-full h-[300px] mb-3 flex justify-center items-center'>
                        <img className='lg:w-[80%] lg:h-[120px] md:w-[200px] md:h-[100px]' src={block2img} alt="img" />
                    </div>

                    <div className='flex flex-col items-center px-4'>
                        <h3 className='text-2xl text-center'>Акысыз колдонуу</h3>
                        <p className='text-lg text-center'>Бул баракчага чексиз жана акысыз кире аласыз</p>
                    </div>
                </div>

                <div className='lg:w-[calc(100%/3)] md:w-[90%] sm:w-[90%] xs:w-[90%] bg-[#F3F7F5] rounded-lg shadow-md hover:shadow-xl hover:scale-105 ease-in-out duration-300'>
                    <div className='w-full h-[300px] mb-3 flex justify-center items-center'>
                        <img className='lg:w-[60%] lg:h-[150px] md:w-[200px] md:h-[150px]' src={block3img} alt="img" />
                    </div> 

                    <div className='flex flex-col items-center px-4'>
                        <h3 className='text-2xl text-center'>Тест</h3>
                        <p className='text-lg text-center'>Ар бир темадан кийин билимди бекмедөө үчун кыска сынактар бар </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content