import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi form ở đây
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Get in Touch
        </h1>
        
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+84 123 456 789</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">contact@example.com</p>
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Your Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-primary dark:bg-zinc-700 text-white dark:text-white rounded-lg hover:bg-primary/90 flex items-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;