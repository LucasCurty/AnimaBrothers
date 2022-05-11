import * as style from './styled'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination,Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../styled.css"


import {ApiAnim} from '../typeAnim'
import { useFetch } from '../../../../Hooks/useFatch';

export default function UltimosLancamentos(){

    const {data} = useFetch<ApiAnim>('seasons/now')

   
    return(
        <>
            <style.Section>
                <h2> Ultimos Lançamentos <style.IconArrow /> </h2>
                <Swiper 
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination,Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    >
                    {data?.map((item,index)=>(
                        <SwiperSlide  key={index}>
                            <a href={`/actualanime/${item.mal_id}`}>
                            <img id="Imglanc"  src={item.images.jpg.large_image_url} alt={item.title} />
                            </a>
                        </SwiperSlide>
                    ))} 
                        
                </Swiper>    
            </style.Section>
        </>
    )

}