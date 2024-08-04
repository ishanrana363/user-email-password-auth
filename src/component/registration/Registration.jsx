import React from 'react'

const Registration = () => {
    return (
        <div className='mt-10  justify-center flex   ' >
            <form>
                <input className='my-3 px-7 py-2 w-96 outline-none border border-red-100  '  placeholder="Your Email" type="email" name="name" id="name" /> <br />
                <input className='px-7 my-3 py-2 w-96 outline-none border border-red-100' placeholder="Enter password" type="password" name="password" id="password" /> <br />
                <input className=' bg-[#11de1f] py-2 px-7 my-4 hover:border rounded-md ' type="submit" value="Registration" />
            </form>
        </div>
    )
}

export default Registration
