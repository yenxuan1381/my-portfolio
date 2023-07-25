import "./Button.css";

const CvButton = () => {
    return ( 
        <button class="button lg:scale-100  xs:scale-80 ">
            <a href="https://drive.google.com/file/d/1gefGVZ4nFkE4N1yAZurMvoh9xh2SPCFK/view?usp=sharing" download>
                <span class="button-content">Download CV</span>
            </a>
        </button>
     );
}
 
export default CvButton;