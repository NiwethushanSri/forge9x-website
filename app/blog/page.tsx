import Link from "next/link";
import Image from "next/image";
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
    image: "/blog/web-development.jpg",
  },
  {
    slug: "ai-transforming-business-operations",
    title: "How AI is Transforming Business Operations",
    excerpt: "From automating repetitive tasks to delivering deep data insights, artificial intelligence is reshaping how businesses operate. Learn how Forge9x can help you leverage AI.",
    category: "AI Development",
    author: "Forge9x Team",
    date: "2 June 2025",
    readTime: "7 min read",
    image: "/blog/ai-development.jpg",
  },
  {
    slug: "seo-guide-for-small-businesses",
    title: "The Essential SEO Guide for Small Businesses",
    excerpt: "What's a business without SEO? A missed opportunity. This guide covers competitor analysis, on-page optimisation, link building, and content strategy to help you rank higher.",
    category: "SEO",
    author: "Forge9x Team",
    date: "20 May 2025",
    readTime: "8 min read",
    image: "/blog/seo.jpg",
  },
  {
    slug: "mobile-app-development-guide",
    title: "Native vs Cross-Platform: Which Should You Choose?",
    excerpt: "Choosing the right approach for your mobile app can make or break your project. We break down the pros and cons of native and cross-platform development to help you decide.",
    category: "Mobile Development",
    author: "Forge9x Team",
    date: "10 May 2025",
    readTime: "6 min read",
    image: "/blog/mobile-development.jpg",
  },
  {
    slug: "erp-system-benefits",
    title: "5 Ways an ERP System Can Transform Your Business",
    excerpt: "Enterprise Resource Planning isn't just for large corporations. Discover how a well-implemented ERP system can streamline operations, reduce costs, and drive growth for your SME.",
    category: "Web Applications",
    author: "Forge9x Team",
    date: "28 April 2025",
    readTime: "6 min read",
    image: "/blog/web-applications.jpg",
  },
  {
    slug: "graphic-design-brand-identity",
    title: "Why a Strong Brand Identity Matters More Than Ever",
    excerpt: "In a crowded digital marketplace, your visual identity is your first impression. Learn how cohesive graphic design builds trust and helps your brand stand out.",
    category: "Graphic Design",
    author: "Forge9x Team",
    date: "15 April 2025",
    readTime: "4 min read",
    image: "/blog/graphic-design.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "bg-blue-500/10 text-blue-400",
  "AI Development": "bg-purple-500/10 text-purple-400",
  "SEO": "bg-green-500/10 text-green-400",
  "Mobile Development": "bg-orange-500/10 text-orange-400",
  "Web Applications": "bg-indigo-500/10 text-indigo-400",
  "Graphic Design": "bg-pink-500/10 text-pink-400",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-black text-white py-24">
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

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all flex flex-col">
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit ${categoryColors[post.category] || "bg-gray-800 text-gray-300"}`}>
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-white mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
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
