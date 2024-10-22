import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    const [result, setResult] = React.useState("");

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "20c90420-0729-4c79-a641-1dd0e50ece85");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div 
                className="w-full max-w-md p-8 rounded-lg shadow-md"
                data-aos="zoom-in"  
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Contact Me</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-white">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-white">Message</label>
                        <textarea 
                            name="message" 
                            required 
                            className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-white">{result}</span>
                </div>
            </div>
        </div>
    );
}
