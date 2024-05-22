import { ApiAnim} from '../typeAnim'

import { useFetch } from '../../../shared/Hooks/useFatch';

// Swiper Lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { CaretDown, Eye } from '@styled-icons/ionicons-outline';
import { Link } from 'react-router-dom';


export default function Top10(){
    let {data} = useFetch<ApiAnim[]>("top/anime")
    let top10 = data?.slice(0,10)
    console.log(top10)
    return(
        <div>
            {!data ? 
                <div className='w-full py-52 text-center animate-pulse'>
                    <em className=' text-white'>Loading Top animes . . .</em> 
                </div>
                :
                <div className='h-screen'>
                <h2 className='text-white font-medium inline-bloc ml-8 my-3'>
                    TOP 10 <CaretDown  className=' w-5 '/> 
                </h2>
                <Swiper 
                    pagination={{dynamicBullets: true,}}
                    autoplay={{delay: 4000, disableOnInteraction: false,}}
                    slidesPerView={1}
                    modules={[Autoplay,Pagination]}
                    className="mySwiper pl-6">
                    {top10?.map((item,index)=>(
                        <SwiperSlide className='pt-2 flex justify-between' key={index}>
                            <div className="text-white">
                                <h1 className='text-4xl pt-24'>{item.title}</h1>
                                <p className='float-right text-md '>{item.title_japanese}</p>
                                <span className='px-1 text-xs font-medium text-amber-600'>{item.rating}</span>
                                <p className='my-4 max-w-xl text-clip  overflow-y-auto max-h-56'>{item.synopsis}</p>
                                <Link to={`/actualanime/${item.mal_id}`}  className='bg-amber-600 py-2 px-2 rounded'>
                                    <span className='px-2'>Conferir</span>
                                    <Eye className='w-5'/>
                                </Link>
                            </div>
                            <div className='flex items-center relative w-6/12'>
                            <img 
                                src={item.images.jpg.large_image_url} 
                                alt={item.title}
                                className=' z-20 opacity-20 blur-lg mr-32'
                            />
                            <img 
                                src={item.images.jpg.large_image_url} 
                                alt={item.title}
                                className=' fixed z-40 ml-52 max-h-128'
                            />
                            </div>
                        </SwiperSlide>
                    ))}           
                </Swiper>
                </div>
            }
        </div>
    )
}