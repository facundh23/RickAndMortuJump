import { useSearchParams } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'
import { useEffect, useRef } from 'react';



const Navbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryLetter = searchParams.get('q') || '';
    const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: target.value });
    };

    const searchInput = useRef(null);

    useEffect(() => {
        searchInput.current.focus();
    }, [])
    return (
        <>
            <ul className="bg-gradient-to-r from-green-900 to-blue-500 w-[100%] p-3 text-center flex gap-3 items-center justify-center w-30 ">
                {/* <Link to="/searchpage" className='w-[25%]'>Search Page</Link> */}


                <img src={logo} className='max-w-[60px] h-[60px] rounded-full hidden sm:block ' />
                <input type="text" placeholder='Find your favorite character' className='text-black p-2 w-[60%] text-center font-bold rounded-md md:text-lg focus:bg-green-600' value={queryLetter} onChange={handleChangeParams} ref={searchInput} />




            </ul>
        </>
    )
}

export default Navbar