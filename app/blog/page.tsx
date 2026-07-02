import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    slug: "why-your-business-needs-a-website",
    title: "Why Your Business Needs a Website in 2025",
    excerpt: "Going digital without a website is a big no-no. Discover why your website is your most valuable digital asset and how it powers every aspect of your online presence.",
    category: "Web Development",
    author: "Forge9x Team",
    date: "15 June 2025",
    readTime: "5 min read",
  },
  {
    slug: "ai-transforming-business-operations",
    title: "How AI is Transforming Business Operations",
    excerpt: "From automating repetitive tasks to delivering deep data insights, artificial intelligence is reshaping how businesses operate. Learn how Forge9x can help you leverage AI.",
    category: "AI Development",
    author: "Forge9x Team",
    date: "2 June 2025",
    readTime: "7 min read",
  },
  {
    slug: "seo-guide-for-small-businesses",
    title: "The Essential SEO Guide for Small Businesses",
    excerpt: "What's a business without SEO? A missed opportunity. This guide covers competitor analysis, on-page optimisation, link building, and content strategy to help you rank higher.",
    category: "SEO",
    author: "Forge9x Team",
    date: "20 May 2025",
    readTime: "8 min read",
  },
  {
    slug: "mobile-app-development-guide",
    title: "Native vs Cross-Platform: Which Should You Choose?",
    excerpt: "Choosing the right approach for your mobile app can make or break your project. We break down the pros and cons of native and cross-platform development to help you decide.",
    category: "Mobile Development",
    author: "Forge9x Team",
    date: "10 May 2025",
    readTime: "6 min read",
  },
  {
    slug: "erp-system-benefits",
    title: "5 Ways an ERP System Can Transform Your Business",
    excerpt: "Enterprise Resource Planning isn't just for large corporations. Discover how a well-implemented ERP system can streamline operations, reduce costs, and drive growth for your SME.",
    category: "Web Applications",
    author: "Forge9x Team",
    date: "28 April 2025",
    readTime: "6 min read",
  },
  {
    slug: "graphic-design-brand-identity",
    title: "Why a Strong Brand Identity Matters More Than Ever",
    excerpt: "In a crowded digital marketplace, your visual identity is your first impression. Learn how cohesive graphic design builds trust and helps your brand stand out.",
    category: "Graphic Design",
    author: "Forge9x Team",
    date: "15 April 2025",
    readTime: "4 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "bg-blue-50 text-blue-600",
  "AI Development": "bg-purple-50 text-purple-600",
  "SEO": "bg-green-50 text-green-600",
  "Mobile Development": "bg-orange-50 text-orange-600",
  "Web Applications": "bg-indigo-50 text-indigo-600",
  "Graphic Design": "bg-pink-50 text-pink-600",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & <span style={{ color: "#FFCC33" }}>Resources</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Expert perspectives on web development, AI, mobile, SEO, and digital growth strategies to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="h-44 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}>
                  <span className="text-5xl font-black" style={{ color: "#00679A" }}>
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#00679A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Put these insights into action. Get in touch and let Forge9x help you grow.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-gray-100 transition-colors" style={{ color: "#00679A" }}>
            Contact Forge9x <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
