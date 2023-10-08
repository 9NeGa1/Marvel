import { ROOT_MODAL } from "../../constans/root";
import "./Notification.css"
import imgCloseBlack from "./img/close-black.svg"


class Notification {
    render() {
         const htmlWrapper = `
         <div class = "notification__container">
                <span>Нет контента</span>
                <button class = "btn bg-contain notification__close" onclick="modal.innerHTML = ''" style="background-image: url(${imgCloseBlack})"
        ></button>
         </div>
         `

         ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification()