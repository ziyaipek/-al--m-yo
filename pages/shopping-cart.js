import NFTCard from '@/components/NFTCard'
import Header from '../components/header'
import {MdRemoveShoppingCart} from 'react-icons/md'
import {MdAddShoppingCart} from 'react-icons/md'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex justify-center items-center h-screen w-screen `,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

export default function Stats() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        
        <div className={style.headerIcon}>
          <MdAddShoppingCart/>
        </div>

        <div className={style.headerIcon}>
          <MdRemoveShoppingCart/>
        </div>
        
      </div>
    </>
  )
}