/* eslint-disable react/no-unescaped-entities */
import { AiOutlineMail } from 'react-icons/ai';
import { CiLock } from 'react-icons/ci';
import { SlPeople } from 'react-icons/sl';
import { FcGoogle } from 'react-icons/fc';
import loginImg from '../../assets/user-login.gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { signInUser , googleSignIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Logged In!!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Logged In!!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
    return (
        <div className="bg-gradient-to-r from-cyan-300 to-blue-500 min-h-screen min-w-screen">

            <h2 className='text-6xl text-fuchsia-600 font-bold text-center pt-10 mb-16'>Login Now</h2>
            <div className="w-full h-full flex flex-row-reverse justify-center items-center ">
                {/* login from */}
                <div className="w-1/2 ">
                    <form onSubmit={handleLogin} className='w-4/5'>
                        <div className='flex justify-center my-5'>
                            <SlPeople className='text-9xl'></SlPeople>
                        </div>
                        <div className='flex items-center gap-4 bg-gray-300 w-full p-1 rounded-md'>
                            <div className='border-r-2 border-gray-600 px-3'>
                                <AiOutlineMail className='text-3xl'></AiOutlineMail>
                            </div>
                            <input type="email" name="email" placeholder="Your Email" className="w-full p-3  bg-gray-300" />
                        </div>
                        <div className='flex items-center gap-4 bg-gray-300 w-full mt-7 p-1 rounded-md'>
                            <div className='border-r-2 border-gray-600 px-3'>
                                <CiLock className='text-3xl'></CiLock>
                            </div>
                            <input type="password" name="password" placeholder="Password" className="w-full p-3  bg-gray-300" />
                        </div>
                        <div className='text-center mt-5'>
                            <input type="submit" value="Login" className='px-8 py-3 text-lg font-bold text-white rounded-lg  bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-800 hover:to-fuchsia-800' />
                        </div>
                    </form>
                    <div className='w-4/5 flex justify-center mt-8'>
                        <button onClick={handleGoogle} className='btn btn-outline font-bold w-4/5 bg-gradient-to-r from-blue-400 to-cyan-500 '>
                            <FcGoogle className='text-2xl'></FcGoogle>
                            Continue with Google</button>
                    </div>
                    <div className='text-lg font-medium text-center w-4/5 mt-4 '>
                        <p>Don't have an account?
                            <span className='text-red-500'><Link to='/register'> Register</Link></span>
                        </p>
                    </div>
                </div>

                {/* image */}
                <div className="w-1/2 flex justify-center">
                    <img src={loginImg} className='w-3/5 rounded-lg' alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;