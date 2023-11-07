/* eslint-disable react/prop-types */
import { AiOutlineLike } from 'react-icons/ai';


const Comments = ({ singleComment }) => {
    const { userName, userImg, comment } = singleComment
    return (
        <div className="flex items-center gap-4 mt-5">
            <img src={userImg} className="w-12 h-12 rounded-full" alt="" />
            <div className="border-2 border-blue-400 p-2 rounded-lg min-w-[300px]">
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold mb-2">{userName}</h4>
                    <AiOutlineLike className="text-2xl"></AiOutlineLike>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Comments;