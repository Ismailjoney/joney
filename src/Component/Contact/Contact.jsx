import React from 'react';

const Contact = () => {
    return (
        <div id="mail" className='my-10'>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Get In Touch</h2>

            <div className="grid grid-cols-1 gap-6 justify-items-center align-items-center lg:grid-cols-2">

                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Let's talk about Everything !</h1>
                    <p className="py-2 text-base">Don't like form? send me an email</p>
                </div>

                <div className="w-full  text-black">
                    <form action="https://formsubmit.co/dfb0bc375d53b3dba8f1008e8fb49179" method="POST">
                        <div className="form-control mt-2">
                            <input type="text" name="name" placeholder="insert your your name" className="input input-bordered input-lg bg-zinc-50" required />
                        </div>
                        <div className="form-control mt-2">
                            <input type="text" name="email" placeholder="insert your email" className="input input-bordered input-lg bg-zinc-50  " required/>
                        </div>
                        <div className="form-control mt-2">
                            <input type="text" name="subject" placeholder="insert your subject" className="input input-bordered input-lg bg-zinc-50" required/>
                        </div>
                        <div className="form-control mt-2">
                            <textarea name="message" placeholder="write your message  " className='  bg-zinc-50 rounded p-4 text-base' rows="6" cols="50"  required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-warning mt-2">Send message</button>
                        </div>
                    </form>


                </div>
            </div>
            <div className="flex flex-col w-full border-opacity-50  mt-6  ">
                <div className="divider mt-8  "></div>
            </div>
        </div>

    );
};

export default Contact;