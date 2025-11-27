import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Sparkles, Users, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.png";
import nivaraDevice from "@/assets/nivara-device.png";
import deviceInUse from "@/assets/device-in-use.png";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Medical-Grade Imaging</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Understand Your Skin Like Never Before
              </h1>
              
              <p className="text-lg text-muted-foreground">
                NIVARA uses advanced imaging technology to help you discover insights about your skin health. Compact, precise, and incredibly easy to use.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/buy">
                  <Button size="lg" className="group">
                    Buy NIVARA
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src={nivaraDevice} 
                alt="NIVARA Device" 
                className="w-full rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose NIVARA?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade technology designed for everyday use, helping you make informed decisions about your skin health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-medium transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical-Grade Accuracy</h3>
              <p className="text-muted-foreground">
                Advanced sensors provide clinical-level imaging for reliable skin analysis at home.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-medium transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Insights</h3>
              <p className="text-muted-foreground">
                App-based analysis helps you understand what you're seeing and what it might mean.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-medium transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-green-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Access</h3>
              <p className="text-muted-foreground">
                Connect with dermatologists and use public kiosks at hospitals and clinics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={deviceInUse} 
                alt="Using NIVARA Device" 
                className="w-full rounded-2xl shadow-medium"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Simple, Powerful, Reliable
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Link Your Device</h3>
                    <p className="text-muted-foreground">
                      Enter your unique device ID to activate and connect to your account.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scan Your Skin</h3>
                    <p className="text-muted-foreground">
                      Use the device to capture high-quality images of areas of concern.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Insights</h3>
                    <p className="text-muted-foreground">
                      Review results, track changes over time, and consult with experts when needed.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/signup">
                <Button size="lg">
                  Create Account
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-muted-foreground">
              Real experiences from people taking control of their skin health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Regular User",
                content: "NIVARA helped me track my skin changes and know when to see a dermatologist. It's like having peace of mind in my pocket.",
              },
              {
                name: "Dr. Patel",
                role: "Dermatologist",
                content: "The image quality is impressive for a consumer device. My patients come in better prepared for consultations.",
              },
              {
                name: "James K.",
                role: "Health Enthusiast",
                content: "Being able to monitor my skin regularly has been game-changing. The app makes it easy to understand what I'm looking at.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center gradient-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of people taking a proactive approach to their skin health with NIVARA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buy">
                <Button size="lg">
                  Buy NIVARA Device
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/kiosks">
                <Button size="lg" variant="outline">
                  Find a Kiosk Near You
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
