import { circularDesignImg } from '../assets';
import HollowCircle from '../components/background/hollow';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import React from 'react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    messsage: '',
  });

  return (
    <section className="relative w-screen flex justify-center flex-col overflow-hidden lg:flex-row">
      <div className="flex-1 flex justify-center items-center z-2 mt-30 lg:mt-0">
        <p className="w-[80%] md:w-[60%]">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away.
          <br />
          Let’s catch up over coffee.Great stories always begin with a good
          conversation
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center lg:justify-start font-[Instrument_Sans] text-[#252729] relative z-2 my-10 lg:mb-0">
        <form className="grid gap-20 lg:gap-10 text-center w-[80%] md:w-[60%]">
          <div className="grid gap-2">
            <h1 className="text-4xl md:3xl font-[Halant]">Join the Story</h1>
            <p className="text-base">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Input type="text" placeholder="Your name*" required />
            <Input type="text" placeholder="Your Email*" required />
            <Input type="text" placeholder="Your Phone" />
            <Input
              type="text-area"
              placeholder="Your message"
              rows={4}
              required
            />
            <Button className="w-fit">Submit</Button>
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
