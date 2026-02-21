import '../styles/Contact.css';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's talk about everything!</h3>
                        <p>
                            I'm currently looking for new opportunities and internships.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <span>ayushdewal2005@gmail.com</span>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <span>9471917686</span>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <span>Jaipur, India</span>
                        </div>

                        <div className="social-links contact-socials">
                            <a href="https://github.com/Ayush0425" target="_blank" rel="noopener noreferrer"><Github /></a>
                            <a href="https://www.linkedin.com/in/ayush-raj-9651262a9/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                rows="5"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>

                        {status === 'success' && (
                            <p className="status-message success" style={{ color: 'var(--primary-color)', marginTop: '1rem', textAlign: 'center' }}>
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="status-message error" style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
                                Failed to send message. Please try again later.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
