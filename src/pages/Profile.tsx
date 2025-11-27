import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link2, Calendar, Stethoscope, Settings, FileText } from "lucide-react";

const Profile = () => {
  const [deviceId, setDeviceId] = useState("");
  const [isDeviceLinked, setIsDeviceLinked] = useState(false);
  
  // Profile settings state
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "" as "male" | "female" | "other" | "prefer-not-to-say" | "",
    age: "",
    newsletterSubscription: false,
  });
  const [profileErrors, setProfileErrors] = useState<{ [key: string]: string }>({});

  const handleLinkDevice = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeviceLinked(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileErrors({});
    // Form submitted successfully
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">My Dashboard</h1>
            
            <Tabs defaultValue="device" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="device">Device</TabsTrigger>
                <TabsTrigger value="scans">Scans</TabsTrigger>
                <TabsTrigger value="kiosks">Kiosks</TabsTrigger>
                <TabsTrigger value="appointments">Doctors</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Device Management */}
              <TabsContent value="device" className="space-y-6">
                {!isDeviceLinked ? (
                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Link2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Link Your NIVARA Device</h2>
                        <p className="text-muted-foreground text-sm">Enter your unique device ID to get started</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleLinkDevice} className="space-y-4 max-w-md">
                      <div className="space-y-2">
                        <Label htmlFor="deviceId">Device ID</Label>
                        <Input
                          id="deviceId"
                          placeholder="NIVARA-XXXX-XXXX-XXXX"
                          value={deviceId}
                          onChange={(e) => setDeviceId(e.target.value)}
                          required
                        />
                        <p className="text-sm text-muted-foreground">
                          Find this on the back of your device or in the included documentation.
                        </p>
                      </div>
                      
                      <Button type="submit">Link Device</Button>
                    </form>
                  </Card>
                ) : (
                  <Card className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-semibold mb-1">NIVARA Pro</h3>
                        <p className="text-sm text-muted-foreground">Device ID: {deviceId}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-accent/10 text-green-accent text-sm">
                        Connected
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Activation Date</p>
                        <p className="font-medium">Jan 15, 2024</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Warranty Status</p>
                        <p className="font-medium">Active (11 months left)</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Last Sync</p>
                        <p className="font-medium">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Troubleshooting</Button>
                      <Button variant="outline" size="sm">Unlink Device</Button>
                    </div>
                  </Card>
                )}
              </TabsContent>

              {/* Scan History */}
              <TabsContent value="scans" className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold">Scan History</h2>
                  </div>
                  
                  {isDeviceLinked ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <Card key={i} className="p-4 hover:shadow-soft transition-smooth">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg bg-muted" />
                            <div className="flex-1">
                              <p className="font-medium">Facial Scan #{i}</p>
                              <p className="text-sm text-muted-foreground">Captured on Jan {20 - i}, 2024</p>
                            </div>
                            <Button size="sm" variant="outline">View Report</Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Link your device to view scan history.</p>
                  )}
                </Card>
              </TabsContent>

              {/* Kiosk Bookings */}
              <TabsContent value="kiosks" className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold">Kiosk Appointments</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">No upcoming kiosk appointments.</p>
                  <Button>Find Nearby Kiosk</Button>
                </Card>
              </TabsContent>

              {/* Doctor Appointments */}
              <TabsContent value="appointments" className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold">Dermatologist Consultations</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">No upcoming consultations scheduled.</p>
                  <Button>Book Consultation</Button>
                </Card>
              </TabsContent>

              {/* Settings */}
              <TabsContent value="settings" className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold">Account Settings</h2>
                  </div>
                  
                  <form onSubmit={handleSaveProfile} className="space-y-4 max-w-2xl">
                      <div className="space-y-2">
                        <Label htmlFor="profile-name">Full Name</Label>
                        <Input
                          id="profile-name"
                          placeholder="John Doe"
                          value={profileData.name}
                          onChange={(e) => {
                            setProfileData({ ...profileData, name: e.target.value });
                            setProfileErrors({ ...profileErrors, name: "" });
                          }}
                          required
                        />
                        {profileErrors.name && (
                          <p className="text-sm text-destructive">{profileErrors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="profile-email">Email</Label>
                        <Input
                          id="profile-email"
                          type="email"
                          placeholder="you@example.com"
                          value={profileData.email}
                          disabled
                          className="bg-muted"
                        />
                        <p className="text-xs text-muted-foreground">
                          Email cannot be changed. Contact support if you need to update your email.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="profile-phone">Phone Number</Label>
                        <Input
                          id="profile-phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={profileData.phone}
                          onChange={(e) => {
                            setProfileData({ ...profileData, phone: e.target.value });
                            setProfileErrors({ ...profileErrors, phone: "" });
                          }}
                        />
                        {profileErrors.phone && (
                          <p className="text-sm text-destructive">{profileErrors.phone}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="profile-gender">Gender</Label>
                          <Select
                            value={profileData.gender || undefined}
                            onValueChange={(value) => {
                              setProfileData({ ...profileData, gender: value as any });
                              setProfileErrors({ ...profileErrors, gender: "" });
                            }}
                          >
                            <SelectTrigger id="profile-gender">
                              <SelectValue placeholder="Select gender (optional)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                          {profileErrors.gender && (
                            <p className="text-sm text-destructive">{profileErrors.gender}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="profile-age">Age</Label>
                          <Input
                            id="profile-age"
                            type="number"
                            placeholder="25"
                            min="1"
                            max="150"
                            value={profileData.age}
                            onChange={(e) => {
                              setProfileData({ ...profileData, age: e.target.value });
                              setProfileErrors({ ...profileErrors, age: "" });
                            }}
                          />
                          {profileErrors.age && (
                            <p className="text-sm text-destructive">{profileErrors.age}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 pt-2">
                        <Checkbox
                          id="profile-newsletter"
                          checked={profileData.newsletterSubscription}
                          onCheckedChange={(checked) => 
                            setProfileData({ ...profileData, newsletterSubscription: checked as boolean })
                          }
                        />
                        <label htmlFor="profile-newsletter" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                          I would like to receive future updates and newsletters from NIVARA
                        </label>
                      </div>

                      <div className="pt-4">
                        <Button type="submit">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
