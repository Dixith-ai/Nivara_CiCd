import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Layers, 
  AlertCircle, 
  Sun, 
  Wind, 
  Calendar,
  Droplets,
  Sparkles,
  Heart,
  Stethoscope,
  CheckCircle
} from "lucide-react";

const Learn = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding Your Skin
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Your skin is your body's largest protective organ.
            </p>
            <p className="text-base text-muted-foreground">
              It shields you from the sun, pollution, germs, heat, cold, and daily wear. Healthy skin is not just about appearance. It plays a major role in immunity, hydration, temperature control, and general wellbeing.
            </p>
          </div>

          {/* How Your Skin Works */}
          <Card className="p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">How Your Skin Works</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Your skin has three main layers:
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Epidermis</p>
                  <p className="text-muted-foreground">The surface layer that prevents water loss and blocks irritants.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Dermis</p>
                  <p className="text-muted-foreground">The middle layer that holds collagen, blood vessels, and nerves.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Subcutaneous Layer</p>
                  <p className="text-muted-foreground">The deeper layer that stores fat and cushions your body.</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              When these layers are healthy and balanced, your skin looks clearer, feels smoother, and protects you more effectively.
            </p>
          </Card>

          {/* Common Skin Conditions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Common Skin Conditions</h2>
            </div>

            <div className="space-y-8">
              {/* Acne */}
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">1. Acne</h3>
                <p className="text-muted-foreground mb-4">
                  Acne develops when pores get clogged with oil, dead skin, or bacteria. It may appear as whiteheads, blackheads, papules, pustules, or deeper bumps.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Common triggers:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Hormones</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Stress</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Heavy skincare products</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Sweat and humidity</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Certain diets</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Not cleaning skin properly</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Helpful habits:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gentle cleansing</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Using non-comedogenic products</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Avoiding picking or squeezing</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Maintaining a balanced routine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Hyperpigmentation */}
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">2. Hyperpigmentation</h3>
                <p className="text-muted-foreground mb-4">
                  This happens when skin makes extra pigment in certain areas, often appearing as dark patches or spots.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Common causes:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Sun exposure</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Past acne marks</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Hormonal changes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Skin inflammation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Helpful habits:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Consistent sun protection</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Avoiding harsh scrubs</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Using soothing skincare</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Tracking which areas darken over time</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Dryness and Barrier Damage */}
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">3. Dryness and Barrier Damage</h3>
                <p className="text-muted-foreground mb-4">
                  When the skin barrier weakens, moisture escapes and irritants enter, causing dryness, redness, flaking, or rough texture.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Common causes:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Cold weather</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Hot showers</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Over-exfoliation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Low humidity</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Using strong cleansers</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Helpful habits:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Moisturizing twice daily</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Using gentle, fragrance-free products</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Avoiding long hot showers</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Protecting skin in cold weather</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Sensitivity and Allergic Reactions */}
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">4. Sensitivity and Allergic Reactions</h3>
                <p className="text-muted-foreground mb-4">
                  Sensitive skin reacts faster to environmental or product changes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Typical symptoms:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Redness</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Burning sensation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Itchiness</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Small bumps</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Tightness</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Helpful habits:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Patch testing new products</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Avoiding heavily fragranced products</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Using barrier-repairing ingredients</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Keeping routines simple</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Fungal Skin Issues */}
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4">5. Fungal Skin Issues</h3>
                <p className="text-muted-foreground mb-4">
                  These often appear in warm, sweaty areas of the body.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Common signs:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Circular patches</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Persistent itching</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Flaking or peeling</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Clear borders around the patch</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Prevention:</p>
                    <p className="text-sm text-muted-foreground">
                      Maintaining good hygiene and keeping skin dry helps reduce flare-ups.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Prevention and Protection */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Prevention and Protection</h2>
            </div>

            <div className="space-y-6">
              {/* Sun Protection */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">1. Sun Protection Basics</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Sun exposure is one of the biggest factors in skin aging and uneven tone.
                </p>
                <p className="font-semibold mb-2">Helpful habits:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Applying sunscreen every morning</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Reapplying if outdoors</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Wearing hats and protective clothing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Seeking shade during peak sun hours</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Using sunglasses to protect delicate eye skin</span>
                  </li>
                </ul>
              </Card>

              {/* Pollution and Dust */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">2. Pollution and Dust Exposure</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pollution can weaken your skin barrier and cause dullness.
                </p>
                <p className="font-semibold mb-2">Helpful habits:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Washing your face after being outdoors</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Using moisturizers that support barrier function</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Keeping skin hydrated</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cleaning pillowcases regularly</span>
                  </li>
                </ul>
              </Card>

              {/* Seasonal Skin Care */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">3. Seasonal Skin Care</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your skin behaves differently each season.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">In summer:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Oiliness increases</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Sweat can clog pores</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Sunscreen becomes essential</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">In winter:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Skin becomes drier</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Cracking and redness are common</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Humidifiers can help maintain moisture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Daily Care Routines */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Daily Care Routines That Work</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Oily Skin */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Oily Skin</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Light, gel-based cleansers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Oil-free moisturizer</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Occasional exfoliation</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Avoid over-washing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consistent sun protection</span>
                  </li>
                </ul>
              </Card>

              {/* Dry Skin */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Dry Skin</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cream-based cleansers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rich moisturizers with ceramides</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Avoiding very hot water</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Using humidifiers in dry seasons</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sealing moisture with gentle oils</span>
                  </li>
                </ul>
              </Card>

              {/* Combination Skin */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Combination Skin</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Using balanced cleansers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Applying lightweight moisturizers on oily areas</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Applying richer creams on dry zones</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Spot treating concerns instead of treating the whole face</span>
                  </li>
                </ul>
              </Card>

              {/* Sensitive Skin */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Sensitive Skin</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Minimal ingredient products</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fragrance-free formulations</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Patch testing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Avoiding over-exfoliation</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Using barrier-supporting moisturizers</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Expert Insights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Expert Insights</h2>
            </div>

            <div className="space-y-6">
              {/* When to Seek Professional Care */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">When You Should Seek Professional Care</h3>
                <p className="text-muted-foreground mb-4">
                  You should consider seeing a dermatologist if you notice:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sudden or severe rashes</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rapid changes in moles</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Persistent acne that causes marks</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Recurring infections</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Painful or spreading skin issues</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Anything that worsens despite routine care</span>
                  </li>
                </ul>
              </Card>

              {/* Why Professional Consultations Help */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Professional Consultations Help</h3>
                <p className="text-muted-foreground mb-4">
                  Dermatologists can:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Examine deeper patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identify underlying triggers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Offer treatments not available over the counter</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prevent minor issues from becoming more serious</span>
                  </li>
                </ul>
              </Card>

              {/* Healthy Skin Habits */}
              <Card className="p-6 bg-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">Healthy Skin Habits</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Stay hydrated</span>
                    </li>
                    <li className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sleep regularly</span>
                    </li>
                    <li className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Manage stress through breathing or relaxation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Keep hands clean when touching your face</span>
                    </li>
                    <li className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Follow routines consistently</span>
                    </li>
                    <li className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Track how your skin behaves over time for better insights</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
