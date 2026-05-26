"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Find our contact details and get in touch with our team for any assistance or inquiries.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">THE GREEN #8 SUITE A, DOVER DE 19901</h3>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <a href="tel:+18553784258" className="font-bold text-gray-900 text-lg mb-1 hover:text-orange-500 transition-colors">
                      855-378-4258
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <a href="mailto:sales@optimusautoparts.com" className="font-bold text-gray-900 text-lg mb-1 hover:text-orange-500 transition-colors">
                      SALES@OPTIMUSAUTOPARTS.COM
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <iframe
                  className="w-full h-80 rounded-lg border-0"
                  title="Google Map for Optimus Auto Parts"
                  src="https://maps.google.com/maps?q=The+Green+%238+Suite+A%2C+Dover%2C+DE+19901&z=12&hl=en&t=m&output=embed&iwloc=near"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right Column - Parts Request Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Parts Request Form</h2>
                  <form className="space-y-6">
                    <div>
                      <Input type="text" placeholder="Enter your name" className="w-full" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Enter your email" className="w-full" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Enter your phone number" className="w-full" />
                    </div>
                    <div>
                      <Textarea placeholder="Part Required" rows={4} className="w-full" />
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="sms-consent-contact" className="mt-1" />
                      <label htmlFor="sms-consent-contact" className="text-sm text-gray-600">
                        By checking this box, you agree to receive SMS messages from Optimus Auto Parts related to
                        delivery notifications. You may reply STOP to opt-out at any time. Reply HELP to 855-378-4258
                        for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on
                        our privacy policy page and Term & Conditions.
                      </label>
                    </div>
                    <div className="text-center space-x-4">
                      <Link href="/privacy-policy" className="text-orange-500 hover:underline text-sm">
                        Privacy Policy
                      </Link>
                      <Link href="/terms-conditions" className="text-orange-500 hover:underline text-sm">
                        Terms and Conditions
                      </Link>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">Submit</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
