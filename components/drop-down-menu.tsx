import { motion } from 'framer-motion';
import Link from 'next/link';



interface DropDownMenuProps {
  onClose: () => void;
 
  scrollToBreakfast: () => void;
  scrollToDinner: () => void;
  scrollToSupper: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToBreakfast, scrollToDinner, scrollToSupper }) => {
  
  return ( 
    
    <motion.div
      className='w-screen
    h-screen
    bg-[#F0E7DE]
    bg-opacity-80
    text-[#C72544]
    p-6 space-y-4
    absolute
    top-11
    left-0
    right-0
    z-50'
      
          
      initial={{ opacity: 0, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ durftion: 0.5 }}
      >
      <div className='flex flex-col space-y-10'>
        <span className='text-[#C72544] text-2xl cursor-pointer' onClick={scrollToBreakfast}>
          Сніданок
        </span>
        <span className='text-[#C72544] text-2xl cursor-pointer' onClick={scrollToDinner}>
          Обід
        </span>
        <span className='cursor-pointer text-[#C72544] text-2xl' onClick={scrollToSupper}>
          Вечеря
        </span>
        <Link href='/contact' className=' text-[#C72544] text-2xl' >
          Побажання
        </Link>

      </div>

    </motion.div>
   );
}
 
export default DropDownMenu;