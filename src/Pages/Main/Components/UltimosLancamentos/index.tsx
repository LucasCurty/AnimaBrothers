import { CaretDown } from '@styled-icons/ionicons-outline';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination,Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../styled.css"


import {ApiAnim} from '../../typeAnim'
import { useFetch } from '../../../../shared/Hooks/useFatch';

export default function UltimosLancamentos(){

    const {data} = useFetch<ApiAnim>('seasons/now')

   console.log(data)

    return(
        <>
            <section>
                <h2 className='text-slate-200 font-medium 
                inline-block py-1 px-4 ml-8 mt-4  bg-amber-600 rounded-3xl
                shadow-md shadow-slate-500'
                 > LATEST RELEASE <CaretDown  className='text-red-600 w-5 '/> </h2>
                <Swiper 
                    pagination={{clickable: true,}}
                    modules={[Pagination,Autoplay]}
                    autoplay={{delay: 3500, disableOnInteraction: false,}}
                    className="mySwiper">
                        
                    {data?.map((item,index)=>(
                        <SwiperSlide  key={index} className='p-3'>
                            <a href={`/actualanime/${item.mal_id}`}
                                className='flex flex-row rounded-full '>
                                
                                <img className='shadow-2xl shadow-amber-600 ' src={item.images.jpg.large_image_url} alt={item.title}/>
                                <div className='bg-gradient-to-r from-slate-700 to-slate-600 p-4'>
                                    <div className='flex flex-row'>{item.genres.map(item => 
                                        <span className='mx-1 px-2 py-px text-slate-600 font-semibold bg-gradient-to-r from-slate-100 to-amber-600 rounded-full'>
                                            {item.name}
                                        </span>)
                                        }
                                    </div>
                                    <div className='text-slate-100 text-justify leading-6 p-3'>
                                        <h1 className='font-semibold text-amber-600 underline decoration-amber-600 underline-offset-2'>Synopsis:</h1>
                                        {item.synopsis}
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-medium text-amber-600'>Year: <span className='font-light text-white	'>{item.year}</span></p>
                                        <p className='font-medium text-amber-600'>Episodes: <span className='font-light text-white	'>{item.episodes === null ? 0 : item.episodes}</span></p>
                                        <p className='font-medium text-amber-600'>Rating: <span className='font-light text-white italic'>{item.rating}</span></p> 
                                        <p className='font-medium text-amber-600'>Status: <span className='font-light text-white'>{item.status}</span></p>                                        
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))} 
                        
                </Swiper>    
            </section>
        </>
    )

}