import {FiFacebook, FiInstagram, FiYoutube, FiAtSign} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Footer(){
  return(
    <footer className='bg-gray-600 w-full h-40 flex items-center justify-center flex-col'>
      <div className='flex gap-3'>
        <Link to={'https://www.facebook.com/'}>
          <FiFacebook size={20} color='#f1f5f9' />
        </Link>
        <Link to={'https://www.instagram.com/'}>
          <FiInstagram size={20} color='#f1f5f9' />
        </Link>
        <Link to={'https://www.youtube.com/'}>
          <FiYoutube size={20} color='#f1f5f9' />
        </Link>
      </div>
      <div className='flex  items-center gap-3 text-slate-100 mt-3'>
        <Link to={'/'}>
          Termos de uso
        </Link>
        -
        <Link to={'/'}>
          Privavidade
        </Link>
      </div>
      <div className='flex items-center gap-1 text-slate-100 mt-3'>
        <FiAtSign size={18} color='#f1f5f9'/>
        2023 Daniel Félix
      </div>
    </footer>
  )
}