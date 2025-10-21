import Image from "next/image";
import Link from "next/link";

const testimonialData = [
  {
    quote:
      "Runme now natively supports Dagger Shell! You can now create runnable notebooks for any devops workflow, using an awesome web UI and the full power of Dagger. Highly recommended!",
    author: "Solomon Hykes",
    description: "Making Dagger. Before that: founded Docker.",
    img: "/img/testimonials/solomon_hykes.png",
    url: "https://x.com/runmedev/status/1905345260714426453",
    border: "border-cyan-500",
  },
  {
    quote:
      "I'm a big fan of executable documentation: looks like Runme.dev is aiming for exactly that: apply the concepts of Jupyter notebooks for your DevOps tooling.",
    author: "Patrick Debois",
    description: "Intersection GenAI and DevOps: consultant and speaker",
    img: "/img/testimonials/patrick_debois.png",
    url: "https://www.linkedin.com/posts/patrickdebois_devops-notebooks-built-with-markdown-activity-7242458825268580353-ximl",
    border: "border-cyan-500",
  },
  {
    quote:
      "Runme has quickly become an indispensable tool in our tech stack. The ability to seamlessly pair natural language explanations with commands and rich output creates the ideal user experience for integrating AI into our DevOps workflow. It's revolutionized how we document and execute our processes, making everything more efficient and accessible.",
    author: "Jeremy Lewi",
    description: "Senior AI/ML Engineer",
    img: "/img/testimonials/jeremy_lewi.png",
    url: "https://lewi.us/",
    border: "border-cyan-500",
  },
  // {
  //   quote:
  //     "Runme makes it easy to keep documentation as the source of truth for what I actually run. Anything that's more than a line, and even a bunch of one liners, now goes into a MD file, and I can quickly and easily (re)run them whenever I need. It saves me from dozens of copy/paste mistakes a day, and I cannot live without it any more!",
  //   author: "Mike Miller",
  //   description: "Head of Security Research",
  //   img: "/img/testimonials/mike_miller.png",
  //   url: "https://www.linkedin.com/in/mikeage",
  //   border: "border-emerald-500",
  // },
  // {
  //   quote:
  //     "Runme makes your project documentation a step by step runbook. Even for non-technical users. Thanks for creating such a neat utility.",
  //   author: "Felix Bartels",
  //   img: "/img/felix_bartels.png",
  //   url: "https://www.linkedin.com/in/felixbartels/",
  //   description: "@felixbartels",
  //   fontSize: "text-2xl",
  //   dividerColor: "bg-blue-default",
  //   border: "border-blue-500",
  // },

  // {
  //   quote:
  //     "This is super exciting! I often find myself wishing that I could use Jupyter Notebooks in other contexts... RUNME is an ideal solution here, and brings us back towards literate computing for broader devops.",
  //   author: "Mike Lockhart",
  //   border: "border-pink-500",
  // },
  {
    quote:
      "Runme organized our docs and technical processes. This is a fantastic tool for both solo development and team work. And the best part is it's all markdown, with 100% compatibility with other tools. Runme is already irreplaceable in my workflow.",
    author: "Dmitry Radkovskiy",
    description: "CTO @ Slise.xyz",
    img: "/img/testimonials/dmitry_radkovskiy.png",
    url: "https://www.linkedin.com/in/zlumer/",
    border: "border-purple-500",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col max-w-screen-lg pt-12 mx-auto px-4">
      <div className="gap-4 sm:columns-2 columns-1">
        {testimonialData.map((testimonial, i) => {
          return (
            <div
              key={i}
              className={`${testimonial.border} p-8 mb-4 border rounded-2xl break-inside-avoid bg-gradient-to-r from-neutral-600/20 to-neutral-600/30`}
            >
              {testimonial.img ? (
                <div className="flex flex-row items-center space-x-3">
                  <Link href={testimonial.url}>
                    <div className="h-[44px] w-[44px] relative">
                      <Image
                        src={testimonial.img}
                        fill
                        className="rounded-xl min-h-[44px] min-w-[44px]"
                        alt={testimonial.author}
                      />
                    </div>
                  </Link>

                  <div className="overflow-hidden">
                    <Link href={testimonial.url}>
                      <div className="font-semibold truncate ">{testimonial.author}</div>
                      <div className="truncate text-neutral-500">{testimonial.description}</div>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-neutral-500">{testimonial.description}</div>
                </>
              )}

              <div className="pt-3 text-neutral-300">{testimonial.quote}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Testimonials;
