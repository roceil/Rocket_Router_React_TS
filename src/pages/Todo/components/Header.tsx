import TodoLogo from '../../../image/TodoLogo.svg'

function Header() {
  return (
    <div className='container mt-4 flex justify-between items-center mb-4 lg:mb-10'>
      <img className='max-w-[242.51px]' src={TodoLogo} alt='Logo' />
      <div className='flex  items-center lg:space-x-6'>
        <span className='font-bold hidden lg:block'>User Name</span>
        <button className='border border-black rounded-lg p-2'>登出</button>
      </div>
    </div>
  )
}
export default Header
