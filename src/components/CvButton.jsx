import "./Button.css";

const CvButton = () => {
    return ( 
        <button className="button lg:scale-100  xs:scale-80 ">
            <a href="https://drive.google.com/file/d/1PusbxH3s7IIwaQ6UNfjCq-qAixb634UP/view?usp=sharing" download target="_blank">
                <span className="button-content">Download CV</span>
            </a>
        </button>
     );
}
 
export default CvButton;