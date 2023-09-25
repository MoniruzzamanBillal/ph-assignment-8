import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CardComponent from "../Components/CardComponent";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        {/* banner component */}
        <Banner />
        {/* banner component */}

        {/* card component  */}
        <div className="cardComponent">
          <CardComponent />
        </div>
        {/* card component  */}
      </div>
    </div>
  );
};

export default Home;
