
import Banner from "./Banner";
import Membership from "./Membership";
import Newsletter from "./Newsletter";
import PieChartCom from "./PieChartCom";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    
   
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Membership></Membership>
            <PieChartCom></PieChartCom>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;