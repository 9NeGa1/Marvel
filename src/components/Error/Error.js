import "./Error.css";
import { ROOT_INDEX } from "../../constans/root";
class Error {
    render() {
        const htmlWrapper = `
        <div class = "error__container">
            <span>
                <p class = "error__alert">Произошла ошибка.</p>
                <p class = "error__alert">Попробуйте зайти позже.</p>

            </span>

        </div>
        `;
        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();