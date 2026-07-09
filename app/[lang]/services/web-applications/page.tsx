import Link from "next/link";
import { ArrowRight, BarChart2, Users, UserCheck, CalendarCheck, Truck, Calendar } from "lucide-react";

const apps = [
  { icon: <BarChart2 size={24} />, color: "#E76F51", title: "Enterprise Resource Planning (ERP)", desc: "Streamline your enterprise's routine operations from planning and budgeting to forecasting and reporting. Our ERP systems integrate seamlessly with your business for comprehensive operational efficiency." },
  { icon: <Users size={24} />, color: "#8AB17D", title: "Customer Relationship Management (CRM)", desc: "Enhance customer interactions and improve data analysis throughout the customer lifecycle. Our CRM solutions optimise engagement, drive client retention, and increase sales." },
  { icon: <UserCheck size={24} />, color: "#E9C46A", title: "Human Resource Management (HRM)", desc: "A strategic approach to managing your workforce. From recruiting the right talent to training and development, our HRM system enhances employee performance and drives organisational success." },
  { icon: <CalendarCheck size={24} />, color: "#6FA8DC", title: "Reservation Management", desc: "A cloud-based platform that centralises and synchronises all your property booking and operational activities. Easily collect, store, and manage all reservations in one place." },
  { icon: <Truck size={24} />, color: "#B39DDB", title: "Logistics Management System", desc: "Comprehensive tools to optimise your supply chain from inventory management to order processing, shipping, and returns. Enhance productivity and ensure smooth logistics operations." },
  { icon: <Calendar size={24} />, color: "#E8A0BF", title: "Appointment Management System", desc: "Simplify how your business schedules and manages appointments. With our intuitive online booking platform, customers can choose a time from your calendar at the touch of a button." },
];

export default async function WebApplicationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <section className="bg-black text-white border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / Web Applications</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Application Development
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At Forge9x, we believe impactful software has the power to keep customers engaged longer than they intended. We create easy-to-use, efficient, and customer-centric solutions that fuel business growth.
            </p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Our Web Application Solutions</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Powerful software solutions tailored to your business operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div key={app.title} className="rounded-2xl p-7 hover:-translate-y-1 transition-all" style={{ backgroundColor: app.color }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-black/10 mb-5" style={{ color: "#111827" }}>
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#111827" }}>{app.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1f2937" }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 md:p-14 text-white text-center" style={{ background: "linear-gradient(135deg, #00679A 0%, #004e75 100%)" }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business Operations?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Let Forge9x help you unlock new levels of success with powerful web application solutions.
            </p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


