/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { AiOutlineMail,AiOutlineUserAdd,AiOutlineLink } from 'react-icons/ai';
import { CiLock } from 'react-icons/ci';
import { SlPeople } from 'react-icons/sl';
// import loginImg from '../../assets/user-login.gif'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    const {createUser,handleUpdateProfile, logOut} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;                                           
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(name,url,email,password);


        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
            return toast.error('Password have to be minimum 6 characters . It should include capital letter and special character')
        }


        createUser(email,password)
        .then(result => {
            console.log(result.user)
            toast.success('Registration Done Successfully!!')
            console.log(result.user);
            handleUpdateProfile(name,url)
            logOut();
            navigate('/login');
        })
        .catch(error =>{
            console.log(error);
            toast.error(error.message)
        })
    }
    return (
        <div className="bg-gradient-to-r from-cyan-300 to-blue-500 min-h-screen min-w-screen">
            <h2 className='text-6xl text-fuchsia-600 font-bold text-center pt-10 mb-16'>Register Now</h2>
            <div className="w-full h-full flex flex-row-reverse justify-center items-center">
                {/* login from */}
                <div className="w-1/2">
                    <form onSubmit={handleRegister}>
                        <div className='flex justify-center my-5'>
                            <SlPeople className='text-9xl'></SlPeople>
                        </div>
                        {/*  */}
                        <div className='flex items-center gap-4 bg-gray-300 w-full p-1 rounded-md'>
                            <div className='border-r-2 border-gray-600 px-3'>
                                <AiOutlineUserAdd className='text-3xl'></AiOutlineUserAdd>
                            </div>
                            <input required type="text" name="name" placeholder="Your Name" className="w-full p-3  bg-gray-300" />
                        </div>
                        {/*  */}
                        <div className='flex items-center mt-7 gap-4 bg-gray-300 w-full p-1 rounded-md'>
                            <div className='border-r-2 border-gray-600 px-3'>
                                <AiOutlineLink className='text-3xl'></AiOutlineLink>
                            </div>
                            <input required type="text" name="url" placeholder="Image link" className="w-full p-3  bg-gray-300" />
                        </div>
                        {/*  */}
                        <div className='flex items-center mt-7 gap-4 bg-gray-300 w-full p-1 rounded-md'>
                            <div className='border-r-2 border-gray-600 px-3'>
                                <AiOutlineMail className='text-3xl'></AiOutlineMail>
                            </div>
                            <input required type="email" name="email" placeholder="Your Email" className="w-full p-3  bg-gray-300" />
                        </div>
                        {/*  */}

                        <div className='flex items-center gap-4 bg-gray-300 w-full mt-7 p-1 rounded-md'>
                            <div className='border-r-2 border-gray-600 px-3'>
                                <CiLock className='text-3xl'></CiLock>
                            </div>
                            <input required type="password" name="password" placeholder="Password" className="w-full p-3  bg-gray-300" />
                        </div>
                        {/*  */}
                        
                        <div className='text-center mt-5'>
                            <input type="submit" value="Register" className='px-8 py-3 text-lg font-bold text-white rounded-lg  bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-800 hover:to-fuchsia-800' />
                        </div>
                    </form>
                    <div className='text-lg font-medium text-center mt-4 mb-16'>
                        <p>Already have an account? 
                            <span className='text-red-500'><Link to='/login'> Login</Link></span>
                            </p>
                    </div>
                </div>

                {/* image */}
                {/* <div className="w-1/2 flex justify-center">
                    <img src={loginImg} className='w-3/5 rounded-lg' alt="" />
                </div> */}

            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;