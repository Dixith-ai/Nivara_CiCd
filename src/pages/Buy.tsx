import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Shield, Truck, RefreshCw, Minus, Plus, CreditCard } from "lucide-react";
import nivaraDevice from "@/assets/nivara-device.png";
import product1 from "@/assets/product/1.png";
import product2 from "@/assets/product/2.png";

const Buy = () => {
  const [quantity, setQuantity] = useState(1);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [formData, setFormData] = useState({
    // Shipping Address
    shippingFullName: "",
    shippingStreet: "",
    shippingCity: "",
    shippingState: "",
    shippingZipCode: "",
    shippingCountry: "",
    shippingPhone: "",
    // Billing Address
    billingFullName: "",
    billingStreet: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "",
    // Payment
    paymentMethod: "card",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Update billing address when "same as shipping" is checked
  useEffect(() => {
    if (sameAsShipping) {
      setFormData(prev => ({
        ...prev,
        billingFullName: prev.shippingFullName,
        billingStreet: prev.shippingStreet,
        billingCity: prev.shippingCity,
        billingState: prev.shippingState,
        billingZipCode: prev.shippingZipCode,
        billingCountry: prev.shippingCountry,
      }));
    }
  }, [sameAsShipping, formData.shippingFullName, formData.shippingStreet, formData.shippingCity, formData.shippingState, formData.shippingZipCode, formData.shippingCountry]);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.shippingFullName.trim()) newErrors.shippingFullName = "Full name is required";
    if (!formData.shippingStreet.trim()) newErrors.shippingStreet = "Street address is required";
    if (!formData.shippingCity.trim()) newErrors.shippingCity = "City is required";
    if (!formData.shippingState.trim()) newErrors.shippingState = "State is required";
    if (!formData.shippingZipCode.trim()) newErrors.shippingZipCode = "Zip code is required";
    if (!formData.shippingCountry.trim()) newErrors.shippingCountry = "Country is required";
    if (!formData.shippingPhone.trim()) newErrors.shippingPhone = "Phone number is required";

    if (!sameAsShipping) {
      if (!formData.billingFullName.trim()) newErrors.billingFullName = "Billing name is required";
      if (!formData.billingStreet.trim()) newErrors.billingStreet = "Billing street is required";
      if (!formData.billingCity.trim()) newErrors.billingCity = "Billing city is required";
      if (!formData.billingState.trim()) newErrors.billingState = "Billing state is required";
      if (!formData.billingZipCode.trim()) newErrors.billingZipCode = "Billing zip code is required";
      if (!formData.billingCountry.trim()) newErrors.billingCountry = "Billing country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Form submitted successfully
  };
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="sticky top-24">
              <img 
                src={nivaraDevice} 
                alt="NIVARA Device" 
                className="w-full rounded-2xl shadow-medium mb-6"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={product1} 
                  alt="Product view 1" 
                  className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-smooth"
                />
                <img 
                  src={product2} 
                  alt="Product view 2" 
                  className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-smooth"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">NIVARA Skin Imaging Device</h1>
                <p className="text-2xl font-semibold text-primary mb-4">$299.00</p>
                <p className="text-muted-foreground">
                  Professional-grade skin imaging technology designed for home use. 
                  Understand your skin health with medical precision.
                </p>
              </div>

              {/* What's Included */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {[
                    "NIVARA handheld imaging device",
                    "USB-C charging cable",
                    "Protective carrying case",
                    "Quick start guide",
                    "1-year warranty",
                    "Free app with lifetime updates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">1-Year Warranty</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">30-Day Returns</p>
                </div>
                <div className="text-center">
                  <Check className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">CE Certified</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-base font-semibold">Quantity</Label>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${(299.00 * quantity).toFixed(2)}
                  </span>
                </div>
              </Card>

              {/* Purchase Button */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowBillingForm(true)}
                  disabled={showBillingForm}
                >
                  {showBillingForm ? "Complete Purchase Below" : `Proceed to Checkout - $${(299.00 * quantity).toFixed(2)}`}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Secure checkout powered by Stripe. Free shipping to most countries.
                </p>
              </div>

              {/* Additional Info */}
              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold mb-3">Important Information</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• NIVARA is a wellness device and not intended to diagnose medical conditions</li>
                  <li>• Always consult with healthcare professionals for medical advice</li>
                  <li>• Requires smartphone with iOS 14+ or Android 10+</li>
                  <li>• Battery life: approximately 8 hours of active use</li>
                </ul>
              </Card>

              {/* Reviews Preview */}
              <div>
                <h3 className="font-semibold mb-4">Customer Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Check key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.8 out of 5 (1,240 reviews)</span>
                </div>
                <p className="text-muted-foreground italic">
                  "Game-changing device for understanding my skin. The clarity and ease of use are outstanding."
                </p>
              </div>
            </div>
          </div>

          {/* Billing Form */}
          {showBillingForm && (
            <div className="mt-12">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Billing & Shipping Information</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Shipping Address</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="shippingFullName">Full Name *</Label>
                        <Input
                          id="shippingFullName"
                          value={formData.shippingFullName}
                          onChange={(e) => handleInputChange("shippingFullName", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                        {errors.shippingFullName && (
                          <p className="text-sm text-destructive">{errors.shippingFullName}</p>
                        )}
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="shippingStreet">Street Address *</Label>
                        <Input
                          id="shippingStreet"
                          value={formData.shippingStreet}
                          onChange={(e) => handleInputChange("shippingStreet", e.target.value)}
                          placeholder="123 Main Street"
                          required
                        />
                        {errors.shippingStreet && (
                          <p className="text-sm text-destructive">{errors.shippingStreet}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shippingCity">City *</Label>
                        <Input
                          id="shippingCity"
                          value={formData.shippingCity}
                          onChange={(e) => handleInputChange("shippingCity", e.target.value)}
                          placeholder="New York"
                          required
                        />
                        {errors.shippingCity && (
                          <p className="text-sm text-destructive">{errors.shippingCity}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shippingState">State/Province *</Label>
                        <Input
                          id="shippingState"
                          value={formData.shippingState}
                          onChange={(e) => handleInputChange("shippingState", e.target.value)}
                          placeholder="NY"
                          required
                        />
                        {errors.shippingState && (
                          <p className="text-sm text-destructive">{errors.shippingState}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shippingZipCode">Zip/Postal Code *</Label>
                        <Input
                          id="shippingZipCode"
                          value={formData.shippingZipCode}
                          onChange={(e) => handleInputChange("shippingZipCode", e.target.value)}
                          placeholder="10001"
                          required
                        />
                        {errors.shippingZipCode && (
                          <p className="text-sm text-destructive">{errors.shippingZipCode}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shippingCountry">Country *</Label>
                        <Input
                          id="shippingCountry"
                          value={formData.shippingCountry}
                          onChange={(e) => handleInputChange("shippingCountry", e.target.value)}
                          placeholder="United States"
                          required
                        />
                        {errors.shippingCountry && (
                          <p className="text-sm text-destructive">{errors.shippingCountry}</p>
                        )}
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="shippingPhone">Phone Number *</Label>
                        <Input
                          id="shippingPhone"
                          type="tel"
                          value={formData.shippingPhone}
                          onChange={(e) => handleInputChange("shippingPhone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                        {errors.shippingPhone && (
                          <p className="text-sm text-destructive">{errors.shippingPhone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox
                        id="sameAsShipping"
                        checked={sameAsShipping}
                        onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                      />
                      <Label htmlFor="sameAsShipping" className="cursor-pointer">
                        Billing address same as shipping address
                      </Label>
                    </div>

                    {!sameAsShipping && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Billing Address</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="md:col-span-2 space-y-2">
                            <Label htmlFor="billingFullName">Full Name *</Label>
                            <Input
                              id="billingFullName"
                              value={formData.billingFullName}
                              onChange={(e) => handleInputChange("billingFullName", e.target.value)}
                              placeholder="John Doe"
                              required={!sameAsShipping}
                            />
                            {errors.billingFullName && (
                              <p className="text-sm text-destructive">{errors.billingFullName}</p>
                            )}
                          </div>

                          <div className="md:col-span-2 space-y-2">
                            <Label htmlFor="billingStreet">Street Address *</Label>
                            <Input
                              id="billingStreet"
                              value={formData.billingStreet}
                              onChange={(e) => handleInputChange("billingStreet", e.target.value)}
                              placeholder="123 Main Street"
                              required={!sameAsShipping}
                            />
                            {errors.billingStreet && (
                              <p className="text-sm text-destructive">{errors.billingStreet}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="billingCity">City *</Label>
                            <Input
                              id="billingCity"
                              value={formData.billingCity}
                              onChange={(e) => handleInputChange("billingCity", e.target.value)}
                              placeholder="New York"
                              required={!sameAsShipping}
                            />
                            {errors.billingCity && (
                              <p className="text-sm text-destructive">{errors.billingCity}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="billingState">State/Province *</Label>
                            <Input
                              id="billingState"
                              value={formData.billingState}
                              onChange={(e) => handleInputChange("billingState", e.target.value)}
                              placeholder="NY"
                              required={!sameAsShipping}
                            />
                            {errors.billingState && (
                              <p className="text-sm text-destructive">{errors.billingState}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="billingZipCode">Zip/Postal Code *</Label>
                            <Input
                              id="billingZipCode"
                              value={formData.billingZipCode}
                              onChange={(e) => handleInputChange("billingZipCode", e.target.value)}
                              placeholder="10001"
                              required={!sameAsShipping}
                            />
                            {errors.billingZipCode && (
                              <p className="text-sm text-destructive">{errors.billingZipCode}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="billingCountry">Country *</Label>
                            <Input
                              id="billingCountry"
                              value={formData.billingCountry}
                              onChange={(e) => handleInputChange("billingCountry", e.target.value)}
                              placeholder="United States"
                              required={!sameAsShipping}
                            />
                            {errors.billingCountry && (
                              <p className="text-sm text-destructive">{errors.billingCountry}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Payment Method</h3>
                    <div className="space-y-2">
                      <Label htmlFor="paymentMethod">Select Payment Method</Label>
                      <select
                        id="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="card">Credit/Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank">Bank Transfer</option>
                      </select>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <Card className="p-6 bg-muted/50">
                    <h3 className="font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>NIVARA Device × {quantity}</span>
                        <span>${(299.00 * quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-primary">Free</span>
                      </div>
                      <div className="pt-2 border-t flex justify-between font-semibold text-base">
                        <span>Total</span>
                        <span className="text-primary">${(299.00 * quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </Card>

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowBillingForm(false)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Place Order - ${(299.00 * quantity).toFixed(2)}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;
