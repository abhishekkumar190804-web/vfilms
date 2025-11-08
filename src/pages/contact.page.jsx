import { circularDesignImg } from '../assets';
import HollowCircle from '../components/background/hollow';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import React, { useState, useRef } from 'react';
import Loader from '../components/ui/loader';

// Fake API call for testing
export const fakeApiCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve('Success') : reject('Error'); // 70% chance success
    }, 2000);
  });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const inputRefs = {
    name: useRef(),
    email: useRef(),
    phone: useRef(),
    message: useRef(),
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = true;
    if (!formData.phone || !/^\d+$/.test(formData.phone))
      newErrors.phone = true;
    if (!formData.message) newErrors.message = true;

    // Shake invalid inputs and focus first invalid
    let firstErrorField = null;
    Object.keys(newErrors).forEach((field) => {
      const el = inputRefs[field].current;
      if (el) {
        el.classList.add('animate-shake');
        setTimeout(() => el.classList.remove('animate-shake'), 500);
        if (!firstErrorField) firstErrorField = el;
      }
    });

    if (firstErrorField) firstErrorField.focus();
    if (Object.keys(newErrors).length && navigator.vibrate)
      navigator.vibrate(200);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      await fakeApiCall();
      setStatus('success');
      // Optionally clear form: setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2000); // reset to idle after 2s
    }
  };

  // Determine button content and classes based on status
  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return <Loader />;
      case 'success':
        return 'Response Submitted!';
      case 'error':
        return 'Something went wrong!';
      default:
        return 'Submit';
    }
  };

  const buttonClasses = `
    w-fit select-none
    motion-safe:transition-all motion-reduce:transition-none
    motion-safe:duration-200 motion-reduce:duration-[0ms]
    ${status === 'success' ? 'bg-green-500 text-white' : ''}
    ${status === 'error' ? 'bg-red-500 text-white' : ''}
    ${status === 'loading' ? 'bg-yellow-500 text-white' : ''}
  `;

  return (
    <section className="relative w-screen flex justify-center flex-col overflow-hidden lg:flex-row">
      <div className="flex-1 flex justify-center items-center z-2 mt-30 lg:mt-0">
        <p className="w-[80%] md:w-[60%]">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away.
          <br />
          Let’s catch up over coffee. Great stories always begin with a good
          conversation
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center lg:justify-start font-[Instrument_Sans] text-[#252729] relative z-2 my-10 lg:mb-0">
        <form
          onSubmit={handleSubmit}
          className="grid gap-20 lg:gap-10 text-center w-[80%] md:w-[60%]"
        >
          <div className="grid gap-2">
            <h1 className="text-4xl md:3xl font-[Halant]">Join the Story</h1>
            <p className="text-base">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Input
              ref={inputRefs.name}
              name="name"
              type="text"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              ref={inputRefs.email}
              name="email"
              type="text"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              ref={inputRefs.phone}
              name="phone"
              type="text"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              ref={inputRefs.message}
              name="message"
              type="text-area"
              placeholder="Your message*"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />

            <Button className={buttonClasses} disabled={status !== 'idle'}>
              {getButtonContent()}
            </Button>
          </div>

          <div className="font-[Halant] font-bold text-[#F15D2B] rounded-full backdrop-blur-xs bg-[#FFFBFB59]">
            <p className="inline pr-2 border-r">vernita@varnanfilms.co.in</p>
            <p className="inline pl-2">+91 98736 84567</p>
          </div>
        </form>
      </div>

      <div className="absolute top-0 right-0 select-none">
        <HollowCircle
          duration="30s"
          img={circularDesignImg}
          className="translate-x-1/2 -translate-y-1/2 w-[150vw]"
        />
      </div>
      <div className="absolute bottom-0 left-0 select-none">
        <HollowCircle
          duration="30s"
          img={circularDesignImg}
          className="-translate-x-1/2 translate-y-1/2 w-[150vw]"
        />
      </div>
    </section>
  );
};

export default Contact;
