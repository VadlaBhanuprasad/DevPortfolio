import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* LEFT */}
          <div>
            <div className="bg-slate-800/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let's Connect
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg sm:rounded-xl border border-slate-700">
                  <Mail className="text-cyan-400" />
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Email</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">bhanuvadla88@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg sm:rounded-xl border border-slate-700">
                  <Phone className="text-cyan-400" />
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">+91 95422 81864</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg sm:rounded-xl border border-slate-700">
                  <MapPin className="text-cyan-400" />
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Location</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Github className="text-gray-400 hover:text-cyan-400 cursor-pointer" />
                <Linkedin className="text-gray-400 hover:text-cyan-400 cursor-pointer" />
                <Twitter className="text-gray-400 hover:text-cyan-400 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div className="bg-slate-800/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Send Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-3 p-2 sm:p-3 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center gap-2 text-green-400 text-xs sm:text-sm">
                  <CheckCircle size={18} />
                  Message sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-3 p-2 sm:p-3 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center gap-2 text-red-400 text-xs sm:text-sm">
                  <AlertCircle size={18} />
                  Failed to send message. Try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />

                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />

                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />

                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
