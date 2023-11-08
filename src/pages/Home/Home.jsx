
import Banner from "./Banner";
import Membership from "./Membership";
import Newsletter from "./Newsletter";
import PieChartCom from "./PieChartCom";
import RecentBlogs from "./RecentBlogs";



const Home = () => {
    
   
    return (
        <div>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <RecentBlogs></RecentBlogs>
            <Membership></Membership>
            <PieChartCom></PieChartCom>
        </div>
    );
};

export default Home;