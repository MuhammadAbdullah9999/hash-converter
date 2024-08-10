import burpSuiteImage from "../images/burpsuite.jpg";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ img, title }) => {

  const navigate=useNavigate();

  const handleCardClick=(e)=>{
    console.log("Card Clicked",e.target.innerText)
    navigate(`/blogs/${e.target.innerText}`)
  }
  return (
    <div className="flex flex-col border shadow-xl rounded-lg md:w-64 sm:w-56 w-56 border-black-200 p-4 mt-4 cursor-pointer hover:shadow-2xl"
      onClick={handleCardClick}
    >
      <div className="w-full">
        <img src={img} alt="An error ocurred"></img>
        
      </div>
      <hr className="pt-2"></hr>
      <h2 className="font-bold md:text-base sm:text-xs">{title}</h2>
    </div>
  );
};

export default BlogCard;
