import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import './ContactForm.css';

// Replace these with your EmailJS credentials from emailjs.com
const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="cf-wrapper">
      <h3 className="cf-heading">Send a message</h3>

      {status === 'success' ? (
        <div className="cf-success">
          <span className="cf-success-icon">✓</span>
          <p>Message sent! I'll get back to you soon.</p>
          <button className="cf-reset" onClick={() => setStatus('idle')}>Send another</button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="cf-form" noValidate>
          <div className="cf-row">
            <div className="cf-field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                name="reply_to"
                placeholder="your@email.com"
                required
                disabled={status === 'sending'}
              />
            </div>
          </div>

          <div className="cf-field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={4}
              placeholder="Hey Priyank, let's work together..."
              required
              disabled={status === 'sending'}
            />
          </div>

          {status === 'error' && (
            <p className="cf-error">Something went wrong. Please try emailing directly.</p>
          )}

          <button type="submit" className="cf-submit" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <span className="cf-spinner" />
            ) : (
              <><FiSend /> Send Message</>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
