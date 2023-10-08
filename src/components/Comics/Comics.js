import {API_URL, URL_COMICS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE, URL_CHARACTERS} from "../../constans/api";
import {getDataApi} from "../../utils/getDataApi"; 

import "./Comics.css";

import { ROOT_INDEX } from "../../constans/root";

import Error from "../Error";
import Characters from "../Characters/Characters";



class Comics {

    renderComics(data) {
        
        let htmlContent = "";

        data.forEach(({id, title, thumbnail: {path, extension} }) => {

            // /v1/public/comics/{comicId}/characters

            if (!path.includes(IMG_NOT_AVAILABLE)) {
        const uri = API_URL + URL_COMICS + "/" + id + "/" + URL_CHARACTERS;
        const imgSrc = path + "/" + IMG_STANDARD_XLARGE + "." + extension;

       

       htmlContent += `
        <li class = "comics__item" data-uri="${uri}">
            <span class = "comics__name">${title}</span>
            <img class = "img-contain comics__img " src = "${imgSrc}">    
        </li>

       `}
       

        })

        const htmlWrapper = `
       <ul class = "comics__container">
         ${htmlContent}       
       </ul>

       `
        
        ROOT_INDEX.innerHTML = htmlWrapper;

    }

    async render() {
            const data = await getDataApi.getData(API_URL + URL_COMICS);

            if(data) {
            this.renderComics(data);
            } else {
                Error.render();
            }

            
    }

    eventListener() {


        document.querySelectorAll(".comics__item").forEach( element => {
        const uri = element.getAttribute("data-uri");

             element.addEventListener("click", () => {
                Characters.render(uri);
             })})
            
    }
}

export default new Comics();