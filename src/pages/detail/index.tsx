import {BsCartPlus} from 'react-icons/bs';

export function ProductDetail(){
  return(
    <>
      <main className='w-full max-w-7xl px-4 mx-auto my-6'>
        <section className='w-full'>
          <div className='flex flex-col lg:flex-row'>
            <img
              className='flex-1 w-full max-h-72 object-contain' 
              src="https://s.zst.com.br/cms-assets/2022/04/4-redken-maneuver-cream-pomade.webp" 
              alt="Logo pomada cabelo" 
            />

            <div className='flex-1'>
              <p className='font-bold text-2xl mt-4 mb-2'>Pomada cabelo</p>
              <p className='my-4'>Excelente pomada para usar no cabelo</p>
              <strong className='text-zinc-700/90 text-xl'>R$1.000</strong>
              <button className='bg-zinc-900 p-1 rounded ml-3'>
                <BsCartPlus size={20} color='#fff' />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}