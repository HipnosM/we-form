import { Link } from "react-router-dom";

export default function MainSection(props) {
    return (
        <main>
            <h2>{props.h2Content} <span>{props.firstSpan}</span> {props.h2SecondContent} <span>{props.secondSpan}</span></h2>

            <div className="botoes">
                <Link to={props.mainFirstHref}>{props.firstButtonText}</Link>
                <Link to={props.mainSecondHref}>{props.secondButtonText}</Link>
            </div>

            <footer>
                <p>{props.footerFirstPText}</p>
                <a href={props.footerFirstHref}>{props.footerFirstLinkText}</a>
            </footer>
        </main>
    );
};