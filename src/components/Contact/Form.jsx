import React, { useRef, useState } from 'react';
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
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        // Regex for phone validation
        const phonePattern = /^\+?[0-9\s\-]{11,12}$/;
        if (!phonePattern.test(value)) {
            setError('Please enter a valid phone number');
        } else {
            setError('');
        }
        setPhone(value);
    };


    return (
        <div className=''>
            <div className='max-w-[1240px] justify-around px-4 py-10 md:flex mx-auto'>
                <div className='p-2 w-full md:w-1/2 py-24 h-auto'>
                    <p className='text-xl text-black font-semibold'>Contact us</p>
                    <h1 className='text-3xl p-2 italic text-center font-semibold my-2 text-white-100 bg-[#662e9b] rounded-xl shadow-xl font-serif'>"Don't Wait, Create Your Success"</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className="bg-[#662e9b] w-full md:w-1/2 md:mx-[80px] p-4 pt-6 mb-4 border-black border-2 rounded-xl duration-300 hover:shadow-2xl">
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-full px-3">
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="last-name">
                                Full Name
                            </label>
                            <input
                                placeholder='John Doe'
                                className="appearance-none text-sm block w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="full-name"
                                type="text"
                                name="from_fullName"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="company">
                                Company
                            </label>
                            <input
                                placeholder='ABC ltd.'
                                className="appearance-none text-sm block w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="company"
                                type="text"
                                name="company"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                placeholder='xyz@abc.com'
                                className="appearance-none text-sm block w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                placeholder='+00 000 000 0000'
                                className="appearance-none text-sm block w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="phone"
                                type='tel'
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="how-did-you-hear-about-us">
                                How did you hear about us?
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full text-sm bg-white-100 border border-black text-gray-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                    id="how-did-you-hear-about-us"
                                    name="how_did_you_hear"
                                    required
                                >
                                    <option className='text-black' value="">Select an option</option>
                                    <option className='text-black' value="Friend">Friend</option>
                                    <option className='text-black' value="Cooperate or Business">Cooperate or Business</option>
                                    <option className='text-black' value="Social Media">Social Media</option>
                                    <option className='text-black' value="Google">Google</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#6white-100">
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
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="block text-sm w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="message"
                                name="message"
                                required
                            />
                        </div>
                    </div>
                    <div className="text-white-100 flex justify-center px-12 md:text-lg py-1">
                        <button
                            type="submit"
                            className="border-2 border-white-100 px-12 py-2 rounded-full text-white-100 hover:text-[#662e9b] hover:bg-white-100 duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
