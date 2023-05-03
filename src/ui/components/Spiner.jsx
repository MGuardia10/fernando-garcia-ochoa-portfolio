import BarLoader from 'react-spinners/BarLoader'

export const Spiner = () => {
  return (
    <div className='flex place-items-center justify-center h-screen'>
      <BarLoader className='text-center' color='gray' size={150} />
    </div>
  )
}
