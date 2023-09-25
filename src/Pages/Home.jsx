import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CardComponent from "../Components/CardComponent";
import { GlobalContext } from "../utility/Context";

const Home = () => {
  const { datas, setDatas, searchData, setSearchData } = GlobalContext();

  console.log(searchData);

  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        {/* banner component */}
        <Banner />
        {/* banner component */}

        {/* card component  */}
        <div className="cardComponent">
          <CardComponent datas={searchData} />
        </div>
        {/* card component  */}
      </div>
    </div>
  );
};

export default Home;
