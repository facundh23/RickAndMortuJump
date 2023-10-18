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
            <ul className="bg-gradient-to-r  from-[#202717] to-[#5d910f] w-[100%] p-3 text-center flex gap-3 items-center justify-center w-30 ">



                <img src={logo} className='max-w-[60px] h-[60px] rounded-full hidden sm:block ' />
                <input type="text" role="searchInput" placeholder='Find your favorite character' className='text-white p-1 w-[60%] text-center placeholder-[#5d910f] font-bold rounded-md md:text-lg focus:bg-white-600 focus:text-black focus:outline-none' value={queryLetter} onChange={handleChangeParams} ref={searchInput} />




            </ul>
        </>
    )
}

export default Navbar