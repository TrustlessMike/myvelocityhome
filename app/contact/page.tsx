import { ContactForm } from "@/components/contact-form"
import { CompanyInfo } from "@/components/company-info"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about mortgage options or ready to start your application? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-slate-600">{CompanyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-slate-600">{CompanyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-slate-600">
                    {CompanyInfo.address}
                    <br />
                    {CompanyInfo.city}, {CompanyInfo.state} {CompanyInfo.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 8am - 8pm ET</p>
                  <p className="text-slate-600">Saturday: 9am - 1pm ET</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full h-64 md:h-80 bg-slate-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.0533139221244!2d-83.7826492!3d42.4677403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882334c7c4b9b8b7%3A0x6f5a9b8f6a1a7d8a!2s203%20Brookside%20Ln%2C%20Brighton%2C%20MI%2048116!5e0!3m2!1sen!2sus!4v1617304123456!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
