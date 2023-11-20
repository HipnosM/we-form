export default function MainSection(props) {
    return (
        <main>
            <h2>{props.h2Content} <span>{props.firstSpan}</span> {props.h2SecondContent} <span>{props.secondSpan}</span></h2>

            <div className="botoes">
                <a href={props.mainFirstHref}>{props.firstButtonText}</a>
                <a href={props.mainSecondHref}>{props.secondButtonText}</a>
            </div>

            <footer>
                <p>{props.footerFirstPText}</p>
                <a href={props.footerFirstHref}>{props.footerFirstLinkText}</a>
            </footer>
        </main>
    );
};