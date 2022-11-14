import { ApiAnim} from '../typeAnim'

import { useFetch } from '../../../../Hooks/useFatch';

// Swiper Lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export default function MaisVistos(){
    const {data} = useFetch<ApiAnim>(`top/anime`)
    const top10 = data?.slice(0,10)

    return(
        <div>
            {!data ? <em style={{textAlign:"center",color:"white"}}>Carregando Top animes...</em> :
                
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
                
            }
        </div>
    )
}