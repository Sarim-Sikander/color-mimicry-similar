import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stethoscope, Clock, FileText, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-medimate-primary to-medimate-light">
      {/* Navigation */}
      <nav className="p-4 flex items-center animate-fade-in">
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <Stethoscope className="w-6 h-6 text-white animate-pulse" />
          <span className="text-white text-xl font-semibold">MediMate</span>
        </div>
        <div className="flex-1 flex justify-center space-x-6 items-center">
          {["Home", "About Us", "Services", "Contact"].map((item, index) => (
            <a 
              key={item}
              href="#" 
              className="text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-medimate-light transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-transparent hover:text-medimate-light transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/auth")}
          >
            Login
          </Button>
          <Button 
            className="bg-medimate-accent text-white hover:bg-medimate-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Sign up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex items-center justify-center">
        <div className="max-w-3xl text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6 animate-scale-in">
            Your AI-Powered Health Companion
            <Sparkles className="inline-block ml-2 w-8 h-8 text-yellow-300 animate-pulse" />
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Get instant medical guidance with our AI assistant. Whether you need quick answers, health advice, or support, our smart AI is here to assist you 24/7. Start your conversation now and take control of your well-being!
          </p>
          <Button 
            className="bg-medimate-accent text-white hover:bg-medimate-accent/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <span>Ask AI Assistant</span>
            <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medimate-primary mb-16 animate-fade-in">
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
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-medimate-light/20 transition-colors hover:scale-[1.02] transform duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-medimate-accent" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="relative animate-scale-in">
              <img
                src="/lovable-uploads/9776966b-e23d-4745-bb91-4319372b7d47.png"
                alt="AI Features"
                className="rounded-lg shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-medimate-light/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medimate-primary mb-16 animate-fade-in">
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-medimate-light/30 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
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
      <footer className="bg-medimate-primary text-white py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                {["Services", "About Us", "Blog", "Contact"].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block hover:text-medimate-light transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-medimate-light after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Destinations</h3>
              <div className="space-y-2">
                {["Maldives", "Los Angeles", "Las Vegas", "Toronto"].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="block hover:text-medimate-light transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-medimate-light after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
              <p className="mb-4">Will send you weekly updates for your better health choices.</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-medimate-accent transition-all duration-300"
                />
                <Button className="bg-white text-medimate-primary hover:bg-medimate-light transition-all duration-300 hover:scale-105">
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
