
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stethoscope, Clock, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medimate-primary to-medimate-light">
      {/* Navigation */}
      <nav className="p-4 flex items-center">
        <div className="flex items-center space-x-2">
          <Stethoscope className="w-6 h-6 text-white" />
          <span className="text-white text-xl font-semibold">MediMate</span>
        </div>
        <div className="flex-1 flex justify-center space-x-6 items-center">
          <a href="#" className="text-white hover:text-medimate-light transition-colors">Home</a>
          <a href="#" className="text-white hover:text-medimate-light transition-colors">About Us</a>
          <a href="#" className="text-white hover:text-medimate-light transition-colors">Services</a>
          <a href="#" className="text-white hover:text-medimate-light transition-colors">Contact</a>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white hover:text-medimate-light">Login</Button>
          <Button className="bg-white text-medimate-primary hover:bg-medimate-light">Sign up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex items-center justify-between">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your AI-Powered Health Companion
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Get instant medical guidance with our AI assistant. Whether you need quick answers, health advice, or support, our smart AI is here to assist you 24/7. Start your conversation now and take control of your well-being!
          </p>
          <Button className="bg-white text-medimate-primary hover:bg-medimate-light text-lg px-8 py-6">
            Ask AI Assistant
          </Button>
        </div>
        <div className="hidden lg:block w-1/2">
          <img 
            src="/lovable-uploads/9776966b-e23d-4745-bb91-4319372b7d47.png" 
            alt="AI Health Assistant" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medimate-primary mb-16">
            Features of the AI Health Assistant App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "AI Powered Medical Guidance - Get instant answers to health related questions with an intelligent AI assistant.",
                "Symptom Checker - Describe your symptoms, and the AI will provide possible causes and recommended next steps.",
                "Virtual Health Assistant - Get personalized health advice based on your medical history and preferences.",
                "Medication Reminders - Set reminders for your medicines and never miss a dose again.",
                "Doctor Consultation Booking - Easily schedule appointments with doctors and healthcare professionals.",
                "Health Tips & Insights - Receive daily health tips, nutrition advice, and wellness recommendations.",
                "Multi-Language Support - Communicate with the AI in different languages for better accessibility.",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-medimate-light/20 transition-colors">
                  <div className="w-2 h-2 mt-2 rounded-full bg-medimate-accent" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/9776966b-e23d-4745-bb91-4319372b7d47.png"
                alt="AI Features"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-medimate-light/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medimate-primary mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-medimate-accent" />,
                title: "24/7 AI Health Assistance",
                description: "Get instant medical guidance anytime, anywhere.",
              },
              {
                icon: <Stethoscope className="w-12 h-12 text-medimate-accent" />,
                title: "Emergency First Aid Support",
                description: "Get immediate first aid instructions for urgent situations.",
              },
              {
                icon: <FileText className="w-12 h-12 text-medimate-accent" />,
                title: "Health Record Tracking",
                description: "Log and manage your medical history securely within the app.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-medimate-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medimate-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-medimate-light transition-colors">Services</a>
                <a href="#" className="block hover:text-medimate-light transition-colors">About Us</a>
                <a href="#" className="block hover:text-medimate-light transition-colors">Blog</a>
                <a href="#" className="block hover:text-medimate-light transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Destinations</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-medimate-light transition-colors">Maldives</a>
                <a href="#" className="block hover:text-medimate-light transition-colors">Los Angeles</a>
                <a href="#" className="block hover:text-medimate-light transition-colors">Las Vegas</a>
                <a href="#" className="block hover:text-medimate-light transition-colors">Toronto</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
              <p className="mb-4">Will send you weekly updates for your better health choices.</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-white text-medimate-primary hover:bg-medimate-light">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p>Copyright © Medicus 2024. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
