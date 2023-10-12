import { useSearchParams } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'



const Navbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryLetter = searchParams.get('q') || '';
    const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: target.value });
    };
    return (
        <>
            <ul className="bg-gradient-to-r from-green-900 to-blue-500 w-[100%] p-3 text-center flex gap-3 items-center justify-center ">
                <img src={logo} className='max-w-[60px] h-[60px] rounded-full hidden sm:block ' />
                <input type="text" placeholder='Find Your Favorite Character' className='bg-green-200 p-2 w-[100%] text-center font-bold rounded-md md:text-lg' value={queryLetter} onChange={handleChangeParams} />
            </ul>
        </>
    )
}

export default Navbar