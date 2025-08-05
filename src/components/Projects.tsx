import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useUser } from "@clerk/clerk-react";
import { Project, projectService } from "@/lib/supabase";
import { ProjectManager } from "./ProjectManager";
import { AdminAuth } from "./AdminAuth";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AUTHORIZED_USER_ID = "user_your_authorized_user_id_here";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showProjectManager, setShowProjectManager] = useState(false);
  const { user, isSignedIn } = useUser();

  const isAuthorized = isSignedIn && user?.id === AUTHORIZED_USER_ID;

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  // Load projects from Supabase
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await projectService.getAllProjects();
        setProjects(data || fallbackProjects);
      } catch (error) {
        console.error('Failed to load projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Fallback projects data
  const fallbackProjects = [
    {
      id: "1",
      title: "Industrial Development",
      images: ["/images/projects/arichem.jpg"],
      description:
        "Civil and Structural Engineering Design and Analysis, including parking of 4600 SM warehouse for Arichem Ltd",
      technologies: ["AutoCAD", "ETABS", "Revit", "BIM 360"],
      features: [
        "Engineering Scope: Integrated civil (site grading, drainage, roads) and structural (warehouse framing, foundations) design and analysis",
        "Construction Phase Focus: On-site supervision and compliance with design specifications and safety standards",
        "Key Deliverables: As-built drawings and as-built bill of quantities for accurate project recordkeeping",
        "Change Management: Handling RFIs and assisting in processing change orders",
        "Role Emphasis: Technical oversight, quality control, and coordination between contractor, design team, and client",
        "Safety & Compliance: Active enforcement of site safety protocols and hazard identification",
        "Stakeholder Coordination: Strong communication link among all project parties to ensure smooth execution",
      ],
      timeline: "May 2024 - Present",
      location: "Kitengela County, Kenya",
      company: "CGP Consulting Engineers Ltd",
      company_url: "https://cgpconsulting.co.ke",
      role: "Assistant Resident Engineer/Assistant Structural Engineer",
      status: "In Progress" as const,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
      created_by: "system",
    },
    {
      id: "2",
      title: "Highway Infrastructure_1",
      description:
        "Preliminary and Detailed Engineering Design for Dualling of A8 Road Eldoret Town",
      images: ["/images/projects/highway-bridge.jpg"],
      technologies: [
        "Autodesk Bridge Designer",
        "Excel",
        "STAAD Pro",
        "Autodesk Revit",
        "Autodesk Robot Structural Analysis",
        "AutoCAD",
      ],
      features: [
        "Structural Scope: Design of road-related structures including bridges, box culverts, and retaining walls",
        "Drawing Production: Preparation of structural drawings aligned with roadway geometry and site constraints",
        "Standards Compliance: Structural design executed in adherence to British Standards",
        "Geotechnical Integration: Interpretation of geotechnical reports to inform foundation and structural design",
        "Quantity Estimation: Preparation of detailed takeoff sheets for bill of quantities (BoQ)",
        "Stakeholder Engagement: Participation in meetings and preparation of presentation slides for project stakeholders",
        "Design Interpretation: Translation of road geometry into feasible structural concepts based on site obstacles",
        "Team Collaboration: Supported multidisciplinary coordination during design and documentation phases",
      ],
      timeline: "June 2022 - May 2024",
      location: " Eldoret, Kenya",
      company: "CGP Consulting Engineers Ltd",
      company_url: "https://cgpconsulting.co.ke",
      role: "Assistant Structural Engineer",
      status: "Completed" as const,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
      created_by: "system",
    },
    {
      id: "3",
      title: "Highway Infrastructure_2",
      description:
        "Preliminary and Detailed Engineering Design for Eldoret Eastern Bypass",
      images: ["/images/projects/highwayInf_2.jpg"],
      technologies: [
        "Autodesk Bridge Designer",
        "Excel",
        "STAAD Pro",
        "Autodesk Revit",
        "Autodesk Robot Structural Analysis",
        "AutoCAD",
      ],
      features: [
        "Structural Scope: Design of road-related structures including bridges, box culverts, and retaining walls",
        "Drawing Production: Preparation of structural drawings aligned with roadway geometry and site constraints",
        "Standards Compliance: Structural design executed in adherence to British Standards",
        "Geotechnical Integration: Interpretation of geotechnical reports to inform foundation and structural design",
        "Quantity Estimation: Preparation of detailed takeoff sheets for bill of quantities (BoQ)",
        "Stakeholder Engagement: Participation in meetings and preparation of presentation slides for project stakeholders",
        "Design Interpretation: Translation of road geometry into feasible structural concepts based on site obstacles",
        "Team Collaboration: Supported multidisciplinary coordination during design and documentation phases",
      ],
      timeline: "June 2022 - May 2024",
      location: " Eldoret Town, Kenya",
      company: "CGP Consulting Engineers Ltd",
      company_url: "https://cgpconsulting.co.ke",
      role: "Assistant Structural Engineer",
      status: "Completed" as const,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
      created_by: "system",
    },
    {
      id: "4",
      title: "Highway Infrastructure_3",
      description:
        "Design Review of Lesseru-Kitale (B2) and Morus – Lokichar (A1) Roads",
      images: ["/images/projects/highwayInf_3.jpg"],
      technologies: [
        "Autodesk Bridge Designer",
        "Excel",
        "STAAD Pro",
        "Autodesk Revit",
        "Autodesk Robot Structural Analysis",
        "AutoCAD",
      ],
      features: [
        "Structural Scope: Design of road-related structures including bridges, box culverts, and retaining walls",
        "Drawing Production: Preparation of structural drawings aligned with roadway geometry and site constraints",
        "Standards Compliance: Structural design executed in adherence to British Standards",
        "Geotechnical Integration: Interpretation of geotechnical reports to inform foundation and structural design",
        "Quantity Estimation: Preparation of detailed takeoff sheets for bill of quantities (BoQ)",
        "Stakeholder Engagement: Participation in meetings and preparation of presentation slides for project stakeholders",
        "Design Interpretation: Translation of road geometry into feasible structural concepts based on site obstacles",
        "Team Collaboration: Supported multidisciplinary coordination during design and documentation phases",
      ],
      timeline: "June 2022 - May 2024",
      location: " Kitale, Kenya",
      company: "CGP Consulting Engineers Ltd",
      company_url: "https://cgpconsulting.co.ke",
      role: "Assistant Structural Engineer",
      status: "Completed" as const,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
      created_by: "system",
    },
    {
      id: "5",
      title: "WasteWater Infrastructure",
      description:
        "Construction of lot 3 Chuka Sewerage Infrastructure for Tana Water Works Development Agency",
      images: ["/images/projects/water-treatment.jpg"],
      technologies: ["AutoCAD", "Microsoft Project", "Excel", "Primavera P6"],
      features: [
        "Project Scope: Construction of trunk and secondary sewer lines totaling 51,338 meters",
        "Sewage Treatment: Development of Ntuntuni Sewage Treatment Plant with a 2,300 m³/day capacity",
        "Site Management: Oversight of daily construction activities and enforcement of technical standards",
        "Progress Monitoring: Tracked work progress against schedule and proactively identified delays",
        "Subcontractor Coordination: Ensured synchronized execution of tasks among multiple subcontractors",
        "Logistics Oversight: Managed timely delivery and distribution of materials and equipment on-site",
        "Documentation & Reporting: Maintained accurate site records including daily logs, progress reports, and non-compliance reports",
      ],
      timeline: "June 2022 - May 2024",
      location: " Chuka, Kenya",
      company: "Zhonghao Overseas Construction Engineering Company Ltd",
      company_url: "https://zhonghao.com",
      role: "Assistant Structural Engineer",
      status: "Completed" as const,
      created_at: "2024-01-01",
      updated_at: "2024-01-01",
      created_by: "system",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 30000);
    return () => clearInterval(interval);
  }, [handleNext]);

  if (showProjectManager) {
    return (
      <AdminAuth>
        <ProjectManager />
        <Button
          onClick={() => setShowProjectManager(false)}
          variant="outline"
          className="fixed top-6 right-6 z-50"
        >
          Back to Portfolio
        </Button>
      </AdminAuth>
    );
  }

  if (loading) {
    return (
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-background text-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            {isAuthorized && (
              <Button
                onClick={() => setShowProjectManager(true)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Settings className="w-4 h-4" />
                Manage
              </Button>
            )}
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center">
            A showcase of major civil engineering projects I've led and
            contributed to, demonstrating expertise across various
            infrastructure domains.
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-xl overflow-hidden shadow-md bg-muted relative"
          >
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px]">
              {projects[currentIndex].images && projects[currentIndex].images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectFade]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  effect="fade"
                  className="w-full h-full rounded-xl"
                  touchRatio={1}
                  touchAngle={45}
                  threshold={10}
                >
                  {projects[currentIndex].images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={image}
                        alt={`${projects[currentIndex].title} - Image ${imgIndex + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                        onError={() => handleImageError(currentIndex)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-xl">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🏗️</div>
                    <p className="text-sm">{projects[currentIndex].title}</p>
                  </div>
                </div>
              )}

              <Badge
                className={`absolute top-4 left-4 text-white px-3 py-1 text-sm rounded-full shadow-lg ${
                  projects[currentIndex].status === "Completed"
                    ? "bg-green-600"
                    : "bg-blue-600"
                }`}
              >
                {projects[currentIndex].status}
              </Badge>

              <Button
                onClick={handlePrev}
                variant="ghost"
                size="icon"
                aria-label="Previous project"
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background/90 shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </Button>

              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                aria-label="Next project"
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background/90 shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </Button>
            </div>

            <div className="p-6 sm:p-8 text-foreground bg-background">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                {projects[currentIndex].title}
              </h3>
              <p className="text-sm sm:text-base mb-4">
                {projects[currentIndex].description}
              </p>

              {/* Technologies */}
              {projects[currentIndex].technologies?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    Technologies:
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground ml-4 space-y-1">
                    {projects[currentIndex].technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {projects[currentIndex].features?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    Features:
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground ml-4 space-y-1">
                    {projects[currentIndex].features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-xs sm:text-sm space-y-1">
                <div>
                  <strong>Timeline:</strong> {projects[currentIndex].timeline}
                </div>
                <div>
                  <strong>Location:</strong> {projects[currentIndex].location}
                </div>
                <div>
                  <strong>Company:</strong>{" "}
                  {projects[currentIndex].company_url ? (
                    <a
                      href={projects[currentIndex].company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-colors"
                    >
                      {projects[currentIndex].company}
                    </a>
                  ) : (
                    projects[currentIndex].company
                  )}
                </div>
                <div>
                  <strong>Role:</strong> {projects[currentIndex].role}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center text-sm text-muted-foreground mt-4">
            {currentIndex + 1} of {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
