import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Search, Hospital, Building2, Stethoscope } from "lucide-react";

const Kiosks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const locations = [
    {
      name: "Central City Hospital",
      type: "Government Hospital",
      address: "123 Medical Plaza, Downtown",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
      icon: Hospital,
    },
    {
      name: "Sunrise Medical Center",
      type: "Private Hospital",
      address: "456 Health Avenue, Westside",
      hours: "Mon-Sun: 7AM-9PM",
      icon: Building2,
    },
    {
      name: "SkinCare Dermatology Clinic",
      type: "Dermatology Clinic",
      address: "789 Wellness Street, Eastside",
      hours: "Mon-Fri: 9AM-5PM",
      icon: Stethoscope,
    },
    {
      name: "Community Health Hub",
      type: "Community Center",
      address: "321 Community Lane, Northside",
      hours: "Tue-Sat: 10AM-6PM",
      icon: Hospital,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find NIVARA Kiosks Near You
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Access NIVARA devices at partner locations including hospitals, clinics, and community health centers.
            </p>
            
            {/* Search */}
            <div className="flex gap-2 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Enter your city or zip code"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <Card className="p-8 mb-12 bg-muted/30">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map will be displayed here</p>
              </div>
            </div>
          </Card>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant="outline" size="sm">All Locations</Button>
            <Button variant="outline" size="sm">Government Hospitals</Button>
            <Button variant="outline" size="sm">Private Hospitals</Button>
            <Button variant="outline" size="sm">Dermatology Clinics</Button>
            <Button variant="outline" size="sm">Community Centers</Button>
          </div>

          {/* Locations List */}
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <location.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{location.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{location.type}</p>
                    <p className="text-sm mb-1 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{location.address}</span>
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">{location.hours}</p>
                    
                    <div className="flex gap-2">
                      <Button size="sm">Book Appointment</Button>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kiosks;
