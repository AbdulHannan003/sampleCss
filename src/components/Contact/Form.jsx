// import React from 'react'

// const Form = () => {
//     return (
//         <>
//             <div className='max-w-[1240px] justify-around px-4 py-10 md:flex mx-auto'>
//                 <div className='p-2 w-full md:w-1/2 py-24 h-auto'>
//                     <p className='text-xl font-bold'>Contact us</p>
//                     <h1 className='text-3xl p-2 italic text-center font-bold my-2 text-white-100 bg-[#662e9b] rounded-xl shadow-xl font-serif'>"Don't Wait, Create Your Success"</h1>
//                 </div>
//                 <form className="w-full md:w-1/2 md:mx-[80px] p-4 pt-6 mb-4 border-[#662e9b] border-2 rounded-xl hover:scale-105 duration-300 hover:shadow-2xl">
//                     <div className="flex flex-wrap mb-6">
//                         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
//                                 First Name*
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
//                                 id="first-name"
//                                 type="text"
//                                 required
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
//                                 Last Name*
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
//                                 id="last-name"
//                                 type="text"
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap  mb-6">
//                         <div className="w-full px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
//                                 Company
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
//                                 id="company"
//                                 type="text"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap  mb-6">
//                         <div className="w-full px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//                                 Email
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
//                                 id="email"
//                                 type="email"
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap  mb-6">
//                         <div className="w-full px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
//                                 Phone
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]-100"
//                                 id="phone"
//                                 type="tel"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap  mb-6">
//                         <div className="w-full px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="how-did-you-hear-about-us">
//                                 How did you hear about us?
//                             </label>
//                             <div className="relative">
//                                 <select
//                                     className="block appearance-none w-full bg-[#662e9b]Light border border-[#662e9b] text-gray-700 py-3 px-4 pr-8 roundedleading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
//                                     id="how-did-you-hear-about-us"
//                                     required
//                                 >
//                                     <option value="">Select an option</option>
//                                     <option value="A">Friend</option>
//                                     <option value="B">Cooperate or Business</option>
//                                     <option value="C">Social Media</option>
//                                     <option value="D">Google</option>
//                                 </select>
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <svg
//                                         className="fill-current h-4 w-4"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 20 20"
//                                     >
//                                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap  mb-6">
//                         <div className="w-full px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
//                                 Message*
//                             </label>
//                             <textarea
//                                 className="block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
//                                 id="message"
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="text-white-100 flex justify-center px-12 md:text-lg py-1  ">
//                         <button className='border-2 border-[#662e9b] px-12 py-2 rounded-full text-[#662e9b] hover:bg-[#662e9b] hover:text-white-100 hover:bg-[#662e9b]-700 duration-300'>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };


// export default Form


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_htvfes9', 'template_lihw05o', form.current, '8GvgYzGjkwINOneAo')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to Send Message, Please Try Again.');
            });
    };

    return (
        <>
            <div className='max-w-[1240px] justify-around px-4 py-10 md:flex mx-auto'>
                <div className='p-2 w-full md:w-1/2 py-24 h-auto'>
                    <p className='text-xl font-bold'>Contact us</p>
                    <h1 className='text-3xl p-2 italic text-center font-bold my-2 text-white-100 bg-[#662e9b] rounded-xl shadow-xl font-serif'>"Don't Wait, Create Your Success"</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 md:mx-[80px] p-4 pt-6 mb-4 border-[#662e9b] border-2 rounded-xl hover:scale-105 duration-300 hover:shadow-2xl">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
                                Full Name*
                            </label>
                            <input
                                className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
                                id="full-name"
                                type="text"
                                name="from_fullName"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
                                Company
                            </label>
                            <input
                                className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
                                id="company"
                                type="text"
                                name="company"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
                                id="email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="appearance-none block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
                                id="phone"
                                type="tel"
                                name="phone"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="how-did-you-hear-about-us">
                                How did you hear about us?
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-[#662e9b]Light border border-[#662e9b] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
                                    id="how-did-you-hear-about-us"
                                    name="how_did_you_hear"
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Cooperate or Business">Cooperate or Business</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Google">Google</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                Message*
                            </label>
                            <textarea
                                className="block w-full bg-[#662e9b]Light text-gray-700 border border-[#662e9b] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#662e9b]Light-100"
                                id="message"
                                name="message"
                                required
                            />
                        </div>
                    </div>
                    <div className="text-white-100 flex justify-center px-12 md:text-lg py-1">
                        <button
                            type="submit"
                            className="border-2 border-[#662e9b] px-12 py-2 rounded-full text-[#662e9b] hover:bg-[#662e9b] hover:text-white-100 hover:bg-[#662e9b]-700 duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;