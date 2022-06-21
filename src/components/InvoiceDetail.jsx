import React from 'react'
import Button from './common/Button'



function InvoiceDetail() {
  return (
    <section className=' h-custom-screen-1 lg:h-screen w-full  '>
      <article className='h-full container w-full mx-auto flex flex-col py-8 justify-between items-center px-8'>

        <header className='flex w-full  flex-row items-center bg-custom-ligth-100 dark:bg-custom-dark-blue-200 px-16 py-8'>
          <aside className='flex flex-row flex-grow justify-between sm:justify-start gap-5 '>
            <h4 className=' text-custom-dark-blue-100 dark:text-custom-ligth-100 '>status</h4>
            <div>Pending</div>
          </aside>

          <aside className='flex-row flex-grow gap-5  items-center justify-end hidden sm:flex'>
              <Button type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" >
                <span>Edit</span>
            </Button>
              <Button  styles=" bg-custom-ligth-red-100 rounded-full" >
                <span className=''>Delete</span>
              </Button>

              <Button styles="bg-custom-dark-purple rounded-full" >
                 <span className=''>Mark as Paid</span>
              </Button>  
          </aside>
        </header>

        <aside></aside>
      </article>
      <footer className=' sm:hidden sticky bottom-0 px-4 py-7 w-full bg-custom-dark-purple'>
        <aside className='flex flex-row flex-grow gap-5  items-center justify-around'>
              <Button type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" >
                <span>Edit</span>
            </Button>
              <Button  styles=" bg-custom-ligth-red-100 rounded-full" >
                <span className=''>Delete</span>
              </Button>

              <Button styles="bg-custom-dark-purple rounded-full" >
                 <span className=''>Mark as Paid</span>
              </Button>  
          </aside>
        </footer>
    </section>
  )
}

export default InvoiceDetail