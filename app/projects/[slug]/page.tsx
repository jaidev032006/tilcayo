import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactCta } from "@/components/sections/contact-cta";

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>

          <header className="max-w-4xl mb-16">
            <span className="px-4 py-2 bg-secondary rounded-full text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
              {project.tags[0]}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </header>

          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-24 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When approaching this project, we needed to overcome significant legacy constraints while building a scalable foundation. The primary goal was to create an experience that felt seamless to the end user, despite the complex data orchestration happening behind the scenes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We architected a modern microservices approach using Next.js for the frontend and a scalable serverless backend. By implementing an edge-first caching strategy, we reduced load times by 80% while simultaneously increasing the complexity of data being served.
                </p>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold mb-6">Key Results</h2>
                <ul className="space-y-4">
                  {[
                    "80% reduction in initial page load time",
                    "Seamless migration of 100,000+ active users",
                    "99.99% uptime since launch",
                    "Complete modernization of the design system"
                  ].map((result, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="p-8 rounded-2xl bg-secondary/50 border border-border sticky top-32">
                <h3 className="text-lg font-bold mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <hr className="my-8 border-border" />
                
                <h3 className="text-lg font-bold mb-4">Project Scope</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>UX/UI Design</li>
                  <li>Frontend Development</li>
                  <li>Backend Architecture</li>
                  <li>Cloud Deployment</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <ContactCta />
    </>
  );
}
