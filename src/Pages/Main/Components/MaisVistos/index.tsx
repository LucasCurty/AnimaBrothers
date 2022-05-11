// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
// import required modules
import { Pagination,Autoplay } from "swiper";

import * as style from './styled'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../styled.css"

import { ApiAnim} from '../typeAnim'

import { useFetch } from '../../../../Hooks/useFatch';



export default function MaisVistos(){
    const {data} = useFetch<ApiAnim>(`top/anime`)
    const top10 = data?.slice(0,10)

    return(
        <div>
            {!data ? <em style={{textAlign:"center",color:"white"}}>Carregando Top animes...</em> :
                <Swiper
                slidesPerView={3}
                spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination,Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    >
                    <div style={{maxWidth:"800px"}}>
                        {top10?.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <style.LinkAnime href={`/actualanime/${item.mal_id}`}>
                                    <img src={item.images.jpg.large_image_url} alt={item.title} />
                                </style.LinkAnime>
                            </SwiperSlide>
                        ))}           
                    </div>
                </Swiper>
            }
        </div>
    )
}