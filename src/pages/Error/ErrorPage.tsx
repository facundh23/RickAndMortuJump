
import { Link } from 'react-router-dom';



const ErrorPage = () => {

    return (
        <>
            <div className='bg-gradient-to-br from-green-400 to-blue-400 w-full h-screen flex items-center justify-center flex-col'>
                <h1 className='font-bold text-2xl mb-2 md:text-md'>Page Not Found | 404 </h1>
                <Link className='bg-black text-white p-2 w-[40%] text-center rounded-md sm:w-[50]' to="/">Go Home</Link>
            </div>

        </>
    )
}

export default ErrorPage