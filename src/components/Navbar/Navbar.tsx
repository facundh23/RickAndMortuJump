import { Link, useSearchParams } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'



const Navbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryLetter = searchParams.get('q') || '';
    const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: target.value });
    };
    return (
        <>
            <ul className="bg-gradient-to-r from-green-900 to-blue-500 w-[100%] p-3 text-center flex gap-3 items-center justify-center w-30 ">
                {/* <Link to="/searchpage" className='w-[25%]'>Search Page</Link> */}

                <button className='bg-orange-500 p-1 rounded-md font-bold hover:scale-105 duration-200' > Prev Page </button>
                <img src={logo} className='max-w-[60px] h-[60px] rounded-full hidden sm:block ' />
                <input type="text" placeholder='Click here to find your favorite character' className='bg-green-200 p-2 w-[60%] text-center font-bold rounded-md md:text-lg' value={queryLetter} onChange={handleChangeParams} />

                <button className='bg-green-500 p-1 rounded-md font-bold w-30 hover:scale-105 duration-200'> Next Page</button>


            </ul>
        </>
    )
}

export default Navbar