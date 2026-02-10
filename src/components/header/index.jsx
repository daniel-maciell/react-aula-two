import Yusuke from "../../assets/images/YuYuHakusho-Feature.jpg"
import "./styles.css"

export default function Header() {
    return (
        <header>
            <img src={Yusuke} alt="Yusuke Urameshi" />
            <nav class>
                <a href="">Yu Yu Hakusho</a>
                <a href="">Anime</a>
                <a href=""> Mangá</a>
                <a href=""> Info</a>
                <div class = "buttons">
                    <button class = "button-1"> Login</button>
                    <button class = "button-2"> Cadastre-se</button>
                </div>
            </nav>
        </header>
    )
}