const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

const techs = [
  { name: "HTML5",        url: `${D}/html5/html5-original.svg` },
  { name: "CSS3",         url: `${D}/css3/css3-original.svg` },
  { name: "JavaScript",   url: `${D}/javascript/javascript-original.svg` },
  { name: "TypeScript",   url: `${D}/typescript/typescript-original.svg` },
  { name: "React",        url: `${D}/react/react-original.svg` },
  { name: "Next.js",      url: `${D}/nextjs/nextjs-original.svg` },
  { name: "Tailwind CSS", url: `${S}/tailwindcss/06B6D4` },
  { name: "Node.js",      url: `${D}/nodejs/nodejs-original.svg` },
  { name: "PHP",          url: `${D}/php/php-original.svg` },
  { name: "Python",       url: `${D}/python/python-original.svg` },
  { name: "Java",         url: `${D}/java/java-original.svg` },
  { name: "MySQL",        url: `${D}/mysql/mysql-original.svg` },
  { name: "MongoDB",      url: `${D}/mongodb/mongodb-original.svg` },
  { name: "AWS",          url: `${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: "Google Cloud", url: `${D}/googlecloud/googlecloud-original.svg` },
  { name: "WordPress",    url: `${D}/wordpress/wordpress-original.svg` },
  { name: "WooCommerce",  url: `${S}/woocommerce/96588A` },
  { name: "Shopify",      url: `${S}/shopify/96BF48` },
  { name: "jQuery",       url: `${D}/jquery/jquery-original.svg` },
  { name: "Figma",        url: `${D}/figma/figma-original.svg` },
  { name: "Adobe XD",     url: `${D}/xd/xd-original.svg` },
  { name: "Wix",          url: `${S}/wix/FAAD4F` },
];

export default function TechMarquee() {
  const repeated = [...techs, ...techs];

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-8 w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {repeated.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-5 sm:px-8 sm:py-7 min-w-[110px] sm:min-w-[140px] hover:shadow-md hover:border-gray-200 transition-all group"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.url}
                alt={tech.name}
                width={56}
                height={56}
                className="object-contain group-hover:scale-110 transition-transform duration-200"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))" }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-600 text-center whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
