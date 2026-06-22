import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Clock,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { personalDetails } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple robust client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all required fields marked with *");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    // Simulate sending progress with sleek timeout
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-cyber-dark scroll-mt-12">
      {/* Decorative Spheres */}
      <div className="absolute top-[15%] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] bg-cyber-cyan/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] max-w-[400px] bg-cyber-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-cyber-cyan font-mono text-xs font-semibold tracking-widest uppercase"
          >
            LET'S COLLABORATE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            Contact Information
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left: Contact Info Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
            <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-display font-bold text-white border-b border-white/5 pb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-cyber-primary" />
                Direct Enquiries
              </h3>

              <div className="space-y-6">
                
                {/* Email Address */}
                <a 
                  href={`mailto:${personalDetails.email}`} 
                  className="flex gap-4 items-start p-4 rounded-xl bg-white/3 border border-white/5 hover:border-cyber-primary/30 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20 group-hover:bg-cyber-primary group-hover:text-cyber-dark transition-all duration-300 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Email Mugesh</p>
                    <p className="text-sm sm:text-base font-sans font-semibold text-white truncate break-words">
                      {personalDetails.email}
                    </p>
                    <span className="text-3s font-mono text-cyber-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      SEND EMAIL <ExternalLink size={10} />
                    </span>
                  </div>
                </a>

                {/* Phone Number */}
                <a 
                  href={`tel:${personalDetails.phone}`} 
                  className="flex gap-4 items-start p-4 rounded-xl bg-white/3 border border-white/5 hover:border-cyber-cyan/30 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 group-hover:bg-cyber-cyan group-hover:text-cyber-dark transition-all duration-300 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Call Directly</p>
                    <p className="text-sm sm:text-base font-sans font-semibold text-white">
                      +91 {personalDetails.phone}
                    </p>
                    <span className="text-3s font-mono text-cyber-cyan flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      DIAL PHONE <ExternalLink size={10} />
                    </span>
                  </div>
                </a>

                {/* Mailing Address */}
                <div 
                  className="flex gap-4 items-start p-4 rounded-xl bg-white/3 border border-white/5 group"
                >
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Permanent Location</p>
                    <p className="text-sm sm:text-base font-sans font-semibold text-white leading-relaxed">
                      {personalDetails.address.street}, {personalDetails.address.village}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {personalDetails.address.taluk}, {personalDetails.address.district} - {personalDetails.address.pincode}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Recruiter Response SLA */}
            <div className="p-4 rounded-xl bg-white/3 border border-white/5 flex items-center gap-3">
              <Clock size={16} className="text-slate-500" />
              <p className="text-xs text-slate-400 leading-normal font-sans">
                <strong>Standard SLA:</strong> Enquiries are typically reviewed and answered within 12 business hours.
              </p>
            </div>
          </div>

          {/* Right: Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 relative h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 text-left"
                  >
                    <p className="text-sm text-slate-300 font-sans mb-3">
                      Drop an online note to request interview dates, resumes, or discuss recruitment parameters.
                    </p>

                    {/* Validation Message display */}
                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Selector */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Your Name <span className="text-cyber-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Eg. Recruiters / Managers"
                          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-sans focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary/35 transition-colors"
                        />
                      </div>

                      {/* Email Selector */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Email Address <span className="text-cyber-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="client@company.com"
                          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-sans focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary/35 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Interview discussion, internship offer, etc."
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-sans focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary/35 transition-colors"
                      />
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Communication Body <span className="text-cyber-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write details of query or offer here..."
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-sans focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary/35 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-primary hover:bg-cyber-primary-hover disabled:bg-slate-800 disabled:text-slate-500 text-cyber-dark font-sans font-bold text-base transition-all duration-300 shadow-md shadow-cyber-primary/25 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Securing Communication...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                  >
                    <div className="p-4 rounded-full bg-cyber-primary/10 border-2 border-cyber-primary text-cyber-primary relative">
                      <CheckCircle size={48} className="animate-bounce" />
                      <div className="absolute inset-0 bg-cyber-primary/20 blur-md rounded-full -z-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-display font-bold text-white">
                        Transmission Complete!
                      </h4>
                      <p className="text-sm font-sans text-slate-300 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. The message was channeled successfully. Mugeshkannan will respond as soon as possible.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-mono transition-all duration-300"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
