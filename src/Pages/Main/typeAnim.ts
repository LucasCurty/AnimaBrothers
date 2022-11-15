export type ApiAnim = [{
    title: string | any;
    images:{jpg:{
        image_url:string
        large_image_url:string
        small_image_url:string
    }}
    mal_id: number;
    genres:[{name:string;}];
    synopsis:string;
    year:number;
    episodes:number;
    rating:string;
    status:string;
    trailer:{
        embed_url:string;

    }
    members:Number;
}]