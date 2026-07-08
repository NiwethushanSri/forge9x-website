import Link from "next/link";
import { ArrowRight, Brain, Bot, BarChart3, Cpu, Eye, MessageSquare, ScanFace } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const aiServices = [
  {
    icon: <Brain size={24} />,
    title: "Custom AI Applications",
    desc: "Tailor-made AI applications designed to meet your specific business needs   AI-powered chatbots, predictive analytics, or machine learning models with cutting-edge expertise.",
  },
  {
    icon: <Bot size={24} />,
    title: "AI Bots and Automation",
    desc: "Automate repetitive tasks and enhance customer service. Our intelligent bots understand and respond to customer inquiries, optimising your workflow seamlessly.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "AI Analytics and Insights",
    desc: "Unlock valuable insights from your data. Our AI-driven analytics help you make data-driven decisions, identify trends, and optimise business processes for better performance.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Machine Learning Integration",
    desc: "Integrate machine learning into your existing systems. From recommendation engines to fraud detection, our ML solutions bring added value to your business operations.",
  },
  {
    icon: <Eye size={24} />,
    title: "Image Recognition",
    desc: "Accurate classification and identification of elements within your images. Working closely with your data to ensure effective recognition tailored to your use case.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "NLP & Text Analysis",
    desc: "Advanced NLP solutions   sentiment analysis, topic modelling, entity recognition, and text classification   to uncover trends and drive better decision-making.",
  },
  {
    icon: <ScanFace size={24} />,
    title: "Secure Facial Biometrics",
    desc: "Speed, accuracy, and ease of use. Leveraging advanced ML algorithms for accurate identification of individuals, even under challenging lighting or environmental conditions.",
  },
];

export default function AIDevelopmentPage() {
  return (
    <>
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-blue-300 mb-4">Services / AI Development</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI <span style={{ color: "#FFCC33" }}>Development</span> Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At Forge9x, we deliver innovative AI development services that transform your business. By leveraging the power of artificial intelligence, we create custom solutions that improve efficiency, enhance customer interactions, and drive sustainable growth.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110" style={{ backgroundColor: "#00679A" }}>
              Harness the Power of AI <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive AI and machine learning solutions tailored to your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-600 bg-blue-50 mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Common Questions</h2>
          <FAQAccordion items={[
            { question: "What types of AI solutions do you offer?", answer: "We provide custom AI applications, AI-powered chatbots, predictive analytics, machine learning models, and AI-driven automation tools tailored to your specific business needs." },
            { question: "How can AI benefit my business?", answer: "AI can automate repetitive tasks, enhance customer service, provide data-driven insights, improve decision-making, and help you stay ahead of competitors in a rapidly evolving digital landscape." },
            { question: "What is the process for developing an AI solution?", answer: "We start with a deep understanding of your business goals, then design, develop, test, and deploy a solution iteratively. We involve you at every stage to ensure alignment with your needs." },
            { question: "Do you provide ongoing support for AI solutions?", answer: "Yes, we offer ongoing support and maintenance packages to ensure your AI solutions continue to perform optimally as your business grows." },
            { question: "How much does it cost to develop an AI solution?", answer: "Costs vary based on complexity and scope. We provide a detailed quote after an initial consultation to understand your specific requirements." },
          ]} />
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let Forge9x Help You Harness the Power of AI</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us today to learn how AI can transform your business operations.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
