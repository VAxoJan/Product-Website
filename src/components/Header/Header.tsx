import logo from '../images/sneakers.svg'
import basketLogo from '../images/basket.svg'
import profileLogo from '../images/profile.jpg'
import mobileButton from '../images/mobileButton.svg'


const Header = () => {
  return (
    <>
    <div className="flex justify-between">
      <div className='flex'>
      <img className='flex xl:hidden mx-4 items-center' src={mobileButton} alt="" />
      <img src={logo}/>
      <div className='lg:flex hidden lg:object-none mx-20 gap-[32px] py-6 font-headerFont text-[#69707D] text-md items-center'>
      <p className='hover:border-b border-[#ff7e1b] cursor-pointer'>Collections</p>
      <p className='hover:border-b border-[#ff7e1b] cursor-pointer pointer'>Men</p>
      <p className='hover:border-b border-[#ff7e1b] cursor-pointer pointer'>Women</p>
      <p className='hover:border-b border-[#ff7e1b] cursor-pointer pointer'>About</p>
      <p className='hover:border-b border-[#ff7e1b] cursor-pointer pointer'>Contact</p>
      </div>
      </div>
      <div className='flex gap-5 lg:gap-11 items-center py-5'>
        <img className='cursor-pointer' src={basketLogo}/>
        <img className='w-6 h-6 lg:w-12 lg:h-12 rounded-full' src={profileLogo}/>
      </div>
    </div>
    </>
  )
}

export default Header;