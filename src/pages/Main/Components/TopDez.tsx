import { CaretDown } from '@styled-icons/ionicons-outline';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../styled.css"


import {ApiAnim} from '../typeAnim'
import { useFetch } from '../../../shared/Hooks/useFatch';
import { Link } from 'react-router-dom';

export default function TopDez(){
    const {data} = useFetch<ApiAnim[]>('top/anime')
    return(
        
            <section>
                <h2 className='text-slate-200 font-medium inline-block py-1 px-4 ml-8 mt-4'>
                    MELHORES CLASSIFICADO <CaretDown className='w-5'/>
                </h2>
                <Swiper 
                    modules={[Pagination]}
                    slidesPerView={6}
                    className="mySwiper">
                        
                    {data?.map((item,index)=>(
                        <SwiperSlide  key={index} className='p-3'>
                            <Link to={`/actualanime/${item.mal_id}`} className='text-white flex flex-col'>
                                <div className='relative group'>
                                    <img src={item.images.jpg.large_image_url} alt={item.title} className='h-80 w-full group-hover:brightness-50' />
                                    <p className='absolute top-20 pl-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100'>Episodeos: {item.episodes <= 0 ? "Não informado" : item.episodes}</p>                                
                                    <p className='absolute top-0 py-2 pl-2 z-50 overflow-hidden h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-100'>{item.synopsis}</p>
                                </div>
                                <p className='text-base py-1'>{item.title}</p>
                            </Link>

                                
                        </SwiperSlide>
                    ))} 
                        
                </Swiper>    
            </section>
       
    )

}