import React, { useState } from 'react'

function Chat() {
    const [chat, setChat] = useState(true)
    return (
        <>
            <div className='flex flex-col gap-3'>
                <div className='px-3'>
                    <h1 className='text-2xl'>Messages</h1>
                </div>
                <div className='cursor-pointer flex flex-col gap-2' onClick={() => setChat(true)}>
                    <div className='flex p-3 bg-white items-center gap-5'>
                        <img src="assets/profile.jpg" className='w-10' alt="" />
                        <span><b>Ashish Sharma</b></span>
                        <p>Lorem, ipsum dolor....</p>
                    </div>
                    <div className='flex p-3 bg-white items-center gap-5'>
                        <img src="assets/profile.jpg" className='w-10' alt="" />
                        <span><b>Ashish Sharma</b></span>
                        <p>Lorem, ipsum dolor....</p>
                    </div>
                    <div className='flex p-3 bg-white items-center gap-5'>
                        <img src="assets/profile.jpg" className='w-10' alt="" />
                        <span><b>Ashish Sharma</b></span>
                        <p>Lorem, ipsum dolor....</p>
                    </div>
                    <div className='flex p-3 bg-white items-center gap-5'>
                        <img src="assets/profile.jpg" className='w-10' alt="" />
                        <span><b>Ashish Sharma</b></span>
                        <p>Lorem, ipsum dolor....</p>
                    </div>
                </div>
                {chat && <div className='p-2'>
                    <div data-section="top" className='flex bg-orange-400 p-1 px-4 items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src="assets/profile.jpg" className='w-10' alt="" />
                            <span><b>Ashish Sharma</b></span>
                        </div>
                        <span className='cursor-pointer' onClick={() => setChat(null)} >X</span>
                    </div>
                    <div className='bg-white'>
                        <div className='flex flex-col gap-0'>
                            <p>Lorem, ipsum dolor...</p>
                            <span className='bg-orange-300 text-sm w-fit'>1 hour ago</span>
                        </div>
                        <div className='pl-64'>
                            <p>Lorem, ipsum dolor...</p>
                            <span className='bg-orange-300 text-sm w-fit'>1 hour ago</span>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor...</p>
                            <span className='bg-orange-300 text-sm w-fit'>1 hour ago</span>
                        </div>
                        <div className='pl-64'>
                            <p>Lorem, ipsum dolor...</p>
                            <span className='bg-orange-300 text-sm w-fit'>1 hour ago</span>
                        </div>
                    </div>
                    <div className='flex items-center focus:outline-none bg-white mb-3'>
                        <textarea className='border border-black w-full h-10 p-2  ' placeholder='Type a message...'></textarea>
                        <button className='bg-amber-400 px-4 py-2'>Send</button>
                    </div>
                </div>}
            </div>

        </>
    )
}

export default Chat
