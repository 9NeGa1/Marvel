import "./Characters.css"
import {getDataApi} from "../../utils/getDataApi"; 
import {IMG_STANDARD_XLARGE} from "../../constans/api";

import { ROOT_MODAL } from "../../constans/root";
import imgCloseWhite from "./img/close-white.svg";
import Notification from "../Notification/Notification";

class Characters {

    renderContent (data) {
        let htmlContent = "";
        data.forEach( ( { name, thumbnail: { path, extension } }) => {
            console.log(name, path, extension);
            const imgSrc = path + "/" + IMG_STANDARD_XLARGE + "." + extension;
            htmlContent += `
            <li class = "character__item">
                <img class = " img-cover character__img" src = "${imgSrc}">
                <span class = "character__name">${name}</span>
            </li>

            `;
        });

        const htmlWrapper = `
        <div class = "wrapper">
        <ul class = "character__container">
            ${htmlContent}
        </ul>
        <button class = "btn bg-contain characters__close" onclick="modal.innerHTML = ''" style="background-image: url(${imgCloseWhite})"
        ></button>
        </div>

        `;
        
        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    

    async render(uri) {
        const data = await getDataApi.getData(uri);
        
        if(data.length) {
            this.renderContent(data)
        } else {
            Notification.render();
        }
    }
}




export default new Characters;