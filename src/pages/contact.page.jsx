import { circularDesignImg } from '../assets';
import HollowCircle from '../components/background/hollow';
import Input from '../components/ui/input';
import Button from '../components/ui/button';
import React from 'react';
import Loader from '../components/ui/loader';
import axios from 'axios';
const API_CONTACT = import.meta.env.VITE_API_CONTACT;

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = React.useState('idle');
  const [errors, setErrors] = React.useState({}); // store per-field errors

  const inputRefs = React.useMemo(
    () => ({
      name: React.createRef(),
      email: React.createRef(),
      phone: React.createRef(),
      message: React.createRef(),
    }),
    [],
  );

  // Validation rules
  const validators = React.useMemo(
    () => ({
      name: (val) => val.trim() !== '',
      email: (val) => /\S+@\S+\.\S+/.test(val),
      phone: (val) => /^\d+$/.test(val),
      message: (val) => val.trim() !== '',
    }),
    [],
  );

  // Validate single field
  const validateField = React.useCallback(
    (field) => {
      const isValid = validators[field](formData[field]);
      setErrors((prev) => ({ ...prev, [field]: !isValid }));

      // Shake animation on invalid
      if (!isValid && inputRefs[field].current) {
        const el = inputRefs[field].current;
        el.classList.add('animate-shake');
        setTimeout(() => el.classList.remove('animate-shake'), 500);
        if (navigator.vibrate) navigator.vibrate(100);
      }

      return isValid;
    },
    [formData, validators, inputRefs],
  );

  // Validate all fields on submit
  const validateAll = () => {
    let isFormValid = true;
    let firstInvalidField = null;

    Object.keys(formData).forEach((field) => {
      const isValid = validateField(field);
      if (!isValid && !firstInvalidField)
        firstInvalidField = inputRefs[field].current;
      if (!isValid) isFormValid = false;
    });

    // Focus the first invalid input
    if (firstInvalidField) firstInvalidField.focus();

    return isFormValid;
  };

  // Handle input changes
  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value,
    }));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setStatus('loading');
    try {
      await axios.post(API_CONTACT, formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

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
    <section className="relative w-screen font-instrument-sans flex justify-center flex-col overflow-hidden lg:flex-row">
      <div className="flex-1 flex justify-center items-center z-2 mt-30 lg:mt-0">
        <p className="w-[80%] md:w-[60%]">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away.
          <br />
          Let’s catch up over coffee. Great stories always begin with a good
          conversation
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center lg:justify-start text-secondary relative z-2 my-10 lg:mb-0">
        <form
          onSubmit={handleSubmit}
          className="grid gap-20 lg:gap-10 text-center w-[80%] md:w-[60%]"
        >
          <div className="grid gap-2">
            <h1 className="text-4xl md:3xl font-halant">Join the Story</h1>
            <p className="text-base">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            {['name', 'email', 'phone', 'message'].map((field) => (
              <Input
                key={field}
                ref={inputRefs[field]}
                name={field}
                type={field === 'message' ? 'text-area' : 'text'}
                placeholder={`Your ${field}*`}
                value={formData[field]}
                onChange={handleChange}
                onBlur={() => validateField(field)}
                rows={field === 'message' ? 4 : undefined}
                className={errors[field] ? 'border-red-500' : ''}
              />
            ))}

            <Button className={buttonClasses} disabled={status !== 'idle'}>
              {getButtonContent()}
            </Button>
          </div>

          <div className="font-halant font-bold text-primary rounded-full backdrop-blur-xs bg-soft-white">
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
