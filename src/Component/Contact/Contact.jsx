import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Get In Touch</h2>

            <div className="grid grid-cols-1 gap-6 justify-items-center align-items-center lg:grid-cols-2">

                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Let's talk about Everything !</h1>
                    <p className="py-2">Don't like form? send me an email</p>
                </div>

                <div className="w-full  text-black">
                    <div className="form-control mt-2">
                        <input type="text" placeholder="insert your your name" className="input input-bordered input-lg bg-zinc-50" />
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" placeholder="insert your email" className="input input-bordered input-lg bg-zinc-50  " />
                    </div>
                    <div className="form-control mt-2">
                        <input type="text" placeholder="insert your subject" className="input input-bordered input-lg bg-zinc-50" />
                    </div>
                    <div className="form-control mt-2">
                    <textarea placeholder="write your message" className='bg-zinc-50 rounded-lg p-4'   rows="4" cols="50"/> 
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline btn-warning mt-2">Send message</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;