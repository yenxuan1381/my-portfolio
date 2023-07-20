import "./Button.css";

const CvButton = () => {
    return ( 
        <button class="button lg:scale-100  xs:scale-80 ">
            <a href="/src/assets/1.png" download>
                <span class="button-content">Download CV</span>
            </a>
        </button>
     );
}
 
export default CvButton;