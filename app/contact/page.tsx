import { ContactForm } from "@/components/contact-form"
import { CompanyInfo, fullAddress, mapsEmbedUrl, teamMembers } from "@/lib/site"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Call Velocity Home Loans at (248) 974-8711 or visit 203 Brookside Lane in Brighton, Michigan. Licensed in Michigan and Florida.",
  path: "/contact",
})

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ officer?: string }>
}) {
  const params = searchParams ? await searchParams : {}
  const officer = teamMembers.find((member) => member.id === params.officer)

  return (
    <div className="py-12">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Velocity Home Loans</h1>
          <p className="text-xl text-slate-600">
            {officer
              ? `Reach ${officer.name} directly, or send a message and we will route it.`
              : "Questions about a purchase, refinance, or pre-approval? Call, email, or send the form. A named loan officer replies."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Office</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href={officer?.phone ? `tel:${officer.phone.replace(/[^\d]/g, "")}` : CompanyInfo.phoneHref} className="text-primary hover:underline">
                    {officer?.phone || CompanyInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href={`mailto:${officer?.email || CompanyInfo.email}`} className="text-primary hover:underline">
                    {officer?.email || CompanyInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-slate-600">{fullAddress()}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  {CompanyInfo.hours.map((row) => (
                    <p key={row.days} className="text-slate-600">
                      {row.days}: {row.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="aspect-video w-full h-64 md:h-80 bg-slate-200 overflow-hidden">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Velocity Home Loans office at 203 Brookside Lane, Brighton, Michigan"
              />
            </div>
          </div>
          <ContactForm officerName={officer?.name} officerId={officer?.id} />
        </div>
      </div>
    </div>
  )
}
