import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const LoadingSkeleton = () => {
    return (
        <div>
            <SkeletonTheme baseColor="#D3D3D3" highlightColor="#444">
                                <p className="">
                                    <Skeleton  width={1200} height={30} style={{
                                    }} count={1} />
                                    <Skeleton  width={1200} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={1100} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={1100} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={1000} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={1000} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={900} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={900} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={800} height={30} style={{
                                    }} count={1} />
                                    <Skeleton width={800} height={30} style={{
                                    }} count={1} />
                                </p>
                            </SkeletonTheme>
        </div>
    );
};

export default LoadingSkeleton;