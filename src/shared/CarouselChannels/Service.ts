import axios, { Axios } from "axios";

export async function SearchMusic(search:string){

    const BaseUrl: string = import.meta.env.VITE_BASE_URL

    const req =  axios.get(
        `${BaseUrl}/search/${search}?qtd=20`
    )
    
    return req
}