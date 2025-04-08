import { useState } from 'react'
import { Button } from "/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import { Check, Star, Users, Shield, Clock, Home } from "lucide-react"

export default function SaasLandingPage() {
  const [activePlan, setActivePlan] = useState('pro')

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise-grade Security",
      description: "Bank-level encryption and compliance with industry standards to keep your data safe."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Support",
      description: "Our team is always available to help you with any questions or issues."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Collaboration Tools",
      description: "Work seamlessly with your team members in real-time."
    },
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: "All-in-One Platform",
      description: "Everything you need in one place to streamline your workflow."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      quote: "This platform has transformed how we manage our projects. The intuitive interface and powerful features saved us countless hours."
    },
    {
      name: "Michael Chen",
      role: "CTO, DataSystems",
      quote: "The security features give us peace of mind, and the collaboration tools have improved our team's productivity by 40%."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      quote: "Switching to this platform was the best decision we made last year. The analytics alone are worth the price."
    }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: ["Up to 5 users", "Basic features", "Email support", "1GB storage"],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Best for growing businesses",
      features: ["Up to 20 users", "All basic features", "Priority support", "10GB storage", "Advanced analytics"],
      cta: "Popular Choice",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: ["Unlimited users", "All pro features", "24/7 dedicated support", "Custom storage", "API access", "Personal onboarding"],
      cta: "Contact Sales"
    }
  ]
return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            <span className="font-bold">SaaSPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Login</Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Business with <span className="text-primary">SaaSPro</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The all-in-one platform to streamline your workflow, boost productivity, and grow your business.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Start Free Trial</Button>
                <Button variant="outline" size="lg">See Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Everything you need to succeed in one powerful platform
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="grid gap-1">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Everything you need to succeed in one powerful platform
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="grid gap-1">
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Businesses Worldwide</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Join thousands of satisfied customers who have transformed their businesses
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <blockquote className="text-gray-500 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Choose the plan that fits your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {plan.name}
                      {plan.popular && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Star className="h-3 w-3 mr-1" /> Popular
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      <span className="text-sm font-normal text-gray-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business?</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Join thousands of businesses already using SaaSPro to streamline their operations.
                </p>
              </div>
              <Button size="lg" className="mt-4">
                Start Your Free 14-Day Trial
              </Button>
            </div>
          </div>
        </section>
      </main>


      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 py-12 md:flex-row md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                <span className="font-bold">SaaSPro</span>
              </div>
              <p className="text-sm text-gray-500">The all-in-one platform for modern businesses.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-semibold">Features</h3>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-primary">Overview</a></li>
                  <li><a href="#" className="hover:text-primary">Security</a></li>
                  <li><a href="#" className="hover:text-primary">Integrations</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Company</h3>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-primary">About</a></li>
                  <li><a href="#" className="hover:text-primary">Careers</a></li>
                  <li><a href="#" className="hover:text-primary">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Legal</h3>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-primary">Privacy</a></li>
                  <li><a href="#" className="hover:text-primary">Terms</a></li>
                  <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
            <p className="text-sm text-gray-500">© 2023 SaaSPro. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-primary">Twitter</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">LinkedIn</a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}