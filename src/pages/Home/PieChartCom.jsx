import { PieChart } from '@mui/x-charts/PieChart';
import useBlogs from '../../hooks/useBlogs';
import LoadingSkeleton from '../../shared/LoadingSkeleton';

const PieChartCom = () => {

    const {data, isLoading} = useBlogs('blogs') 

    if(isLoading){
        return <div className='max-w-7xl mx-auto my-10'>
            <LoadingSkeleton></LoadingSkeleton>
        </div>
    }
    console.log(data);

    const getArcLabel = (params) => {
        const percent = params.value / data?.length;
        return `${(percent * 100).toFixed(0)}%`;
    };

    const travel = data?.filter(blog => blog.category.toLowerCase() == 'travel')
    const food = data?.filter(blog => blog.category.toLowerCase() == 'food')
    const lifestyle = data?.filter(blog => blog.category.toLowerCase() == 'lifestyle')
    const technology = data?.filter(blog => blog.category.toLowerCase() == 'technology')
    const finance = data?.filter(blog => blog.category.toLowerCase() == 'finance')

    const chartData = [
        { label: 'Travel', value: travel?.length },
        { label: 'Food', value: food?.length },
        { label: 'Lifestyle', value: lifestyle?.length },
        { label: 'Technology', value: technology?.length },
        { label: 'Finance', value: finance?.length },
    ];
    

    return (
        <div className="max-w-7xl mx-auto flex justify-center">
            <div>
                <h2 className='md:text-4xl text-3xl font-bold text-center my-10'>Popular Categories</h2>
                <p className='text-xl text-purple-500 font-bold text-center mb-10'>Percentage of popular blog categories</p>
                <div className=' flex justify-center items-center'>
                    <PieChart
                        series={[
                            {
                                startAngle: -90,
                                endAngle: 90,
                                data : chartData,
                                arcLabel: getArcLabel,

                            },
                        ]}
                        margin={{right: 135}}
                        height={300}
                        width={420}
                    />
                </div>
            </div>

        </div>
    );
};

export default PieChartCom;