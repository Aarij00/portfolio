import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      // Example: await axios.post('/api/contact', formData);

      console.log(formData);
      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col px-4 md:px-24 pb-20">
      <h1 className="text-center text-2xl md:text-left md:text-5xl mb-8 mt-20">
        <span className="text-lightGrey">/arij/portfolio/</span>
        <span className="text-cyan">contact</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto flex-grow justify-center">
        <p className="text-lightGrey text-center w-full mb-2 text-xl 2xl:text-3xl">
          Can&apos;t wait to connect! Drop me a message below.
        </p>
        
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="input input-bordered input-accent w-full bg-night-light rounded-lg border-cyan text-lightGrey"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="input input-bordered input-accent w-full bg-night-light rounded-lg border-cyan text-lightGrey"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            required
            rows="6"
            className="textarea textarea-accent w-full bg-night-light rounded-lg border-cyan text-lightGrey"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="btn border-cyan text-cyan bg-night hover:bg-cyan hover:text-night w-40"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
