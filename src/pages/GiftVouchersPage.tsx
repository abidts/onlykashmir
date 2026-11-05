import { Gift, Heart, MapPin, MessageCircle, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const faqData = [
  {
    question: 'What is a Kashmir travel gift voucher?',
    answer: 'It is a thoughtful travel gift that can be used toward a Kashmir holiday package. The recipient can contact Only Kashmir to discuss the package and suitable travel dates.',
  },
  {
    question: 'How much does a Kashmir holiday gift voucher start from?',
    answer: 'Kashmir holiday gift packages start from ₹50,000. Contact our team to discuss package options and the gift amount that suits your plans.',
  },
  {
    question: 'How is the travel gift voucher delivered?',
    answer: 'Our team can arrange a personalised digital gift voucher to share by email or WhatsApp.',
  },
  {
    question: 'When can the recipient plan their Kashmir trip?',
    answer: 'The recipient can get in touch with our team to discuss travel dates and plan their getaway. Availability depends on the itinerary and travel dates.',
  },
  {
    question: 'What occasions are Kashmir travel vouchers suitable for?',
    answer: 'A Kashmir trip makes a memorable gift for birthdays, anniversaries, weddings, honeymoons, family celebrations and other special occasions.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kashmir Travel Gift Vouchers',
  serviceType: 'Travel gift vouchers and Kashmir holiday packages',
  description: 'Gift a Kashmir holiday experience with a digital travel voucher from Only Kashmir Tour & Travels.',
  provider: {
    '@type': 'TravelAgency',
    name: 'Only Kashmir Tour & Travels',
    url: 'https://www.onlykashmir.com',
    telephone: '+91-8899666998',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
};

const whatsappUrl = 'https://wa.me/918899666998?text=Hi%20Only%20Kashmir%2C%20I%27m%20interested%20in%20a%20Kashmir%20travel%20gift%20voucher.';

export default function GiftVouchersPage() {
  return (
    <div className="min-h-screen bg-[#F7F3E9] py-14 text-gray-900 sm:py-20">
      <SEO
        title="Travel Gift Vouchers | Gift a Kashmir Holiday"
        description="Give a Kashmir holiday gift voucher for birthdays, anniversaries, weddings or family celebrations. Digital vouchers and Kashmir holiday packages start from ₹50,000."
        canonical="https://www.onlykashmir.com/kashmir-travel-gift-vouchers"
        schema={serviceSchema}
        faq={faqData}
        breadcrumbList={[
          { name: 'Home', url: 'https://www.onlykashmir.com/' },
          { name: 'Kashmir Travel Gift Vouchers', url: 'https://www.onlykashmir.com/kashmir-travel-gift-vouchers' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-vintage-900 via-vintage-800 to-vintage-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-vintage-100">
              <Gift className="h-4 w-4" aria-hidden="true" />
              A gift they can travel into
            </span>
            <h1 className="mt-6 font-playfair text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Travel Gift Vouchers
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/85 sm:text-lg">
              Give someone a journey they’ll remember forever. Celebrate them with a Kashmir
              <br className="hidden md:block" /> holiday gift voucher and let their next great story begin in the mountains.
            </p>
            <div className="mt-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">
                A Gift Without Limits
              </p>
              <p className="mt-2 font-playfair text-2xl font-bold text-white sm:text-3xl">
                Priceless in Love. Limitless in Possibilities.
              </p>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Choose a gift amount that matches the size of your heart.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-vintage-900 transition hover:bg-amber-300"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Ask about a gift voucher
              </a>
              <a
                href="mailto:info@onlykashmir.com?subject=Kashmir%20Travel%20Gift%20Voucher"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Email our team
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16" aria-labelledby="how-it-works">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vintage-600">Give the gift of a getaway</p>
            <h2 id="how-it-works" className="mt-3 font-playfair text-3xl font-bold sm:text-4xl">
              How a travel voucher works
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { number: '01', title: 'Choose the perfect gift', text: 'Select a Kashmir holiday package or talk with our team about a custom gift amount.', icon: Gift },
              { number: '02', title: 'Make their day special', text: 'Arrange a personalised digital voucher to send to your loved one by email or WhatsApp.', icon: Heart },
              { number: '03', title: 'Let their journey begin', text: 'The recipient contacts our team to discuss their travel dates and plan their Kashmir getaway.', icon: Plane },
            ].map(({ number, title, text, icon: Icon }) => (
              <article key={number} className="rounded-3xl border border-vintage-500/15 bg-white/75 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vintage-500/10 text-sm font-bold text-vintage-700">{number}</span>
                  <Icon className="h-5 w-5 text-vintage-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-playfair text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-vintage-500/15 bg-white/65 p-6 sm:p-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-vintage-500/10 text-vintage-700">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-playfair text-3xl font-bold">A memorable gift for every occasion</h2>
          </div>
          <div>
            <p className="leading-7 text-gray-700">
              Instead of another keepsake, give a loved one time away in Kashmir. A travel voucher can be a thoughtful birthday gift, anniversary surprise, wedding present, honeymoon treat or family celebration. From Srinagar and Dal Lake to Gulmarg and Pahalgam, our team can help the recipient explore package options and plan a trip that suits them.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Share the occasion and your preferred budget with Only Kashmir Tour & Travels. We’ll help you understand the available holiday options before you arrange the gift.
            </p>
            <Link to="/packages" className="mt-5 inline-flex font-semibold text-vintage-700 underline decoration-vintage-500/40 underline-offset-4 hover:text-vintage-900">
              Explore Kashmir tour packages
            </Link>
          </div>
        </section>

        <section className="py-14 sm:py-16" aria-labelledby="gift-faq">
          <h2 id="gift-faq" className="text-center font-playfair text-3xl font-bold sm:text-4xl">
            Kashmir travel gift voucher FAQs
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {faqData.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl border border-vintage-500/15 bg-white/75 p-5">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-gray-900 marker:hidden">
                  {question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-gray-600">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-vintage-900 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="font-playfair text-3xl font-bold">Ready to gift a Kashmir getaway?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75">
            Talk to our team about a travel gift voucher, package options and the next steps.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-vintage-900 transition hover:bg-amber-300"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
