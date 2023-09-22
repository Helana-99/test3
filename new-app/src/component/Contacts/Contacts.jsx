import React from 'react'

export default function Contacts() {
  return <>
    <section className='contacts vh-100'>

      <h2 className='text-center fw-bolder mb-5'>
        CONTACT SECTION
      </h2>

      <div className=" m-auto w-50">
        <form action="">
          <input type="text"
            placeholder='USER NAME'
            className=' w-100   rounded-0 border-bottom border-0 form-control-lg' />
<br />

<input type="text"
            placeholder='USER AGE'
            className=' w-100 rounded-0 border-bottom border-0 form-control-lg' />
<br />

<input type="email"
            placeholder='USER EMAIL'
            className=' w-100  rounded-0 border-bottom border-0 form-control-lg' />
<br />


<input type="password"
            placeholder='USER PASSWORD'
            className=' w-100 rounded-0 border-bottom border-0 form-control-lg' />
<br />
<button className='send btn'>
  SEND
</button>

        </form>




      </div>

    </section>



  </>
}
