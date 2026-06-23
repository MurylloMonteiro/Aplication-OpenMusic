import axios from "axios";

export async function GetVideoURL(videoId:string){

    const BaseUrl: string = import.meta.env.VITE_BASE_URL

    const req =  axios.get(
        `${BaseUrl}/play/${videoId}`
    )
    console.log(req)
    return req
}