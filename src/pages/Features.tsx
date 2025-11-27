import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Microscope, Smartphone, Lock, TrendingUp, Users, Shield } from "lucide-react";
import nivaraDevice from "@/assets/nivara-device.png";

const Features = () => {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Imaging Technology",
      description: "Multi-spectral sensors capture detailed images beyond what the naked eye can see, revealing subsurface skin conditions.",
    },
    {
      icon: Smartphone,
      title: "Intelligent App Integration",
      description: "Seamless connection to your smartphone provides instant analysis, historical tracking, and personalized insights.",
    },
    {
      icon: Lock,
      title: "Privacy & Security First",
      description: "Your health data is encrypted and stored securely. You control who sees your information.",
    },
    {
      icon: TrendingUp,
      title: "Track Changes Over Time",
      description: "Monitor how your skin responds to treatments, environmental factors, and lifestyle changes with detailed history logs.",
    },
    {
      icon: Users,
      title: "Expert Consultations",
      description: "Share scans directly with dermatologists for remote consultations and professional guidance.",
    },
    {
      icon: Shield,
      title: "Medical-Grade Reliability",
      description: "Meets clinical standards for accuracy and safety, developed with input from leading dermatologists.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology That Empowers Your Skin Health
            </h1>
            <p className="text-lg text-muted-foreground">
              NIVARA combines clinical-grade imaging with consumer-friendly design to give you unprecedented insight into your skin.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={nivaraDevice} 
              alt="NIVARA Device Features" 
              className="w-full rounded-2xl shadow-medium"
            />
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specs */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technical Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Imaging System</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multi-spectral LED illumination</li>
                  <li>• High-resolution 12MP sensor</li>
                  <li>• Polarized and cross-polarized modes</li>
                  <li>• UV fluorescence capability</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Device Specs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Compact handheld design (120g)</li>
                  <li>• Rechargeable battery (8 hours)</li>
                  <li>• Bluetooth 5.0 connectivity</li>
                  <li>• Medical-grade materials</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Software Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time image processing</li>
                  <li>• AI-assisted analysis</li>
                  <li>• Secure cloud storage</li>
                  <li>• Export to healthcare providers</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Compliance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CE certified</li>
                  <li>• HIPAA compliant data handling</li>
                  <li>• FDA registered facility</li>
                  <li>• ISO 13485 quality standards</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
