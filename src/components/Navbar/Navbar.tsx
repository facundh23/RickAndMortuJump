import logo from '../../assets/images/logo.jpg'

// type Props = {}

const Navbar = () => {
    return (
        <>
            <ul className="bg-transparent p-3 text-center flex gap-3 items-center justify-center ">
                <img src={logo} className='max-w-[50px] h-[50px] rounded-full hidden sm:block' />
                <input type="text" placeholder='Find Your Favorite Character' className='bg-green-200 p-2 w-[100%] text-center font-bold rounded-md md:text-lg ' />
            </ul>
        </>
    )
}

export default Navbar