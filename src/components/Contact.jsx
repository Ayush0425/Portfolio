import '../styles/Contact.css';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Twitter, FileText } from 'lucide-react';
import { useState } from 'react';
import { playClick } from '../utils/sound';

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
        playClick();
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

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Ayush0425",
            icon: <Github size={18} />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ayush-raj-9651262a9/",
            icon: <Linkedin size={18} />
        },
        {
            name: "Twitter",
            url: "https://x.com/ayushdewal2005", // placeholder or real
            icon: <Twitter size={18} />
        },
        {
            name: "Email",
            url: "mailto:ayushdewal2005@gmail.com",
            icon: <Mail size={18} />
        },
        {
            name: "Resume",
            url: "/resume.pdf",
            icon: <FileText size={18} />
        }
    ];

    return (
        <section id="contact" className="contact-section border-dashed-b">
            <div className="contact-header">
                <h2>Contact</h2>
            </div>

            {/* Social Grid Layout matching samworks */}
            <div className="contact-social-grid">
                {socialLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-grid-card border-dashed-all hover-bg active-scale"
                        onClick={playClick}
                    >
                        <div className="social-grid-icon border-dashed-all">
                            {link.icon}
                        </div>
                        <span className="social-grid-name">{link.name}</span>
                    </a>
                ))}
            </div>

            {/* Contact Details & Form */}
            <div className="contact-container">
                <div className="contact-info border-dashed-all hover-bg">
                    <h3>Let's collaborate.</h3>
                    <p>
                        I'm currently looking for internships and entry-level developer positions. 
                        If you have an idea to discuss or just want to connect, send a message!
                    </p>

                    <div className="info-block">
                        <div className="info-row">
                            <Mail size={14} className="info-icon" />
                            <span>ayushdewal2005@gmail.com</span>
                        </div>
                        <div className="info-row">
                            <Phone size={14} className="info-icon" />
                            <span>+91 94719 17686</span>
                        </div>
                        <div className="info-row">
                            <MapPin size={14} className="info-icon" />
                            <span>Jaipur, India</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form border-dashed-all" onSubmit={handleSubmit}>
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
                            className="border-dashed-all"
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
                            className="border-dashed-all"
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
                            placeholder="Write your message..."
                            rows="4"
                            className="border-dashed-all"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="contact-submit-btn border-dashed-all active-scale"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={12} style={{ marginLeft: '4px' }} />
                    </button>

                    {status === 'success' && (
                        <p className="status-msg success">
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="status-msg error">
                            Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
