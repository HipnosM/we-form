import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";



export default function Form(props) {
    return (
        <main>
            <header>
                <Link to="/"><FaArrowLeft /></Link>
                <h2>{props.h2Content} <span>{props.Span}</span></h2>
            </header>

            <form action="">
                <label htmlFor="name">{props.firstLabel}</label>
                <input type="text" id="name" name="name" required />

                <div className="select">
                    <label htmlFor="atuacao">{props.secondLabel}</label>
                    <select name="atuacao" id="atuacao" required>
                        <option defaultValue="" unselectable="">{props.firstOption}</option>
                    </select>
                </div>

                <div className="points">
                    <label htmlFor="coleta">{props.thirdLabel}</label>
                    <input type="text" id="coleta" name="coleta" required />
                    <button>
                        <FaPlusCircle />
                    </button>
                </div>

                <div className="botoes">
                    <button type="submit">{props.submit}</button>
                </div>
            </form>
        </main>
    );
};