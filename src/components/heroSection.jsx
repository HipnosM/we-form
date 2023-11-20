export default function HeroSection(props) {
    return (
        <aside>
            <img src={props.img_src} alt={props.img_alt} />
            <h1><span>{props.spanContent}</span> {props.h1Content}</h1>
        </aside>
    );
};