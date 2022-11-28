import { ApiAnim} from '../../typeAnim'

import { useFetch } from '../../../../shared/Hooks/useFatch';

// Swiper Lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { CaretDown } from '@styled-icons/ionicons-outline';


export default function MaisVistos(){
    const {data} = useFetch<ApiAnim>(`top/anime`)
    const top10 = data?.slice(0,10)

    return(
        <div>
            {!data ? 
                <div className='w-full py-52 text-center animate-pulse'>
                    <em className=' text-white'>Loading Top animes . . .</em> 
                </div>
                :
                <>
                <h2 className='text-slate-200 font-medium 
                inline-block py-1 px-4 ml-8 my-3  bg-amber-600 rounded-3xl
                shadow-md shadow-slate-500'
                 > TOP 10 <CaretDown  className='text-red-600 w-5 '/> </h2>
                
                    <Swiper 
                        pagination={{dynamicBullets: true,}}
                        autoplay={{delay: 2800, disableOnInteraction: false,}}
                        slidesPerView={4}
                        modules={[Autoplay,Pagination]}
                        className="mySwiper pl-6"
                        >
                        {top10?.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <a className="" href={`/actualanime/${item.mal_id}`} >
                                    <img 
                                        src={item.images.jpg.large_image_url} 
                                        alt={item.title}
                                        className=" 
                                        w-auto max-w-xs 
                                        max-h-96 h-auto
                                        hover:border-2 hover:border-amber-100 hover:border-x-amber-600 
                                        "
                                        />
                                </a>
                            </SwiperSlide>
                        ))}           
                    </Swiper>
                </>
            }
        </div>
    )
}