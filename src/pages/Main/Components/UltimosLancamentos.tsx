import { CaretDown } from '@styled-icons/ionicons-outline';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination,Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../styled.css"


import {ApiAnim} from '../typeAnim'
import { useFetch } from '../../../shared/Hooks/useFatch';
import { Link } from 'react-router-dom';

export default function UltimosLancamentos(){
    const {data} = useFetch<ApiAnim[]>('seasons/now')
    return(
        <>
            <section>
                <h2 className='text-slate-200 font-medium inline-block py-1 px-4 ml-8 mt-4'>
                    LANÇADOS RECENTEMENTE <CaretDown className='w-5'/>
                </h2>
                <Swiper 
                    modules={[Pagination,Autoplay]}
                    autoplay={{delay: 4100, disableOnInteraction: false,}}
                    slidesPerView={6}
                    className="mySwiper">
                        
                    {data?.map((item,index)=>(
                        <SwiperSlide  key={index} className='p-3'>
                            <Link to={`/actualanime/${item.mal_id}`} className='flex flex-row'>
                                    <div className='text-white h-96 w-full'>
                                {
                                        false ?
                                    <img src={item.images.jpg.large_image_url} alt={item.title} className='h-80 w-full'/>
                                    :
                                    <div>
                                        <div className='absolute z-50 text-slate-100'>
                                           <span>Episodeos: {item.episodes}</span>
                                           <p className='pt-2 overflow-hidde h-20'>{item.synopsis}</p>
                                        </div>
                                        <img src={item.images.jpg.large_image_url} alt={item.title} className='h-80 w-full blur-lg'/>
                                    </div>


                                }
                                    <p className='text-base py-1 '>{item.title}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))} 
                        
                </Swiper>    
            </section>
        </>
    )

}