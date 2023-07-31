import "./Button.css";

const CvButton = () => {
    return ( 
        <button class="button lg:scale-100  xs:scale-80 ">
            <a href="https://drive.google.com/file/d/1zWKWJUb9J3j-VKIpzqe60faQuOUHlV7r/view?usp=sharing" download target="_blank">
                <span class="button-content">Download CV</span>
            </a>
        </button>
     );
}
 
export default CvButton;
