import Header from "@/sections/home/Header";
import HomeSecondSection from "@/sections/home/HomeSecondSection";
import Footer from "@/sections/home/Footer";
import SkillSecondSection from "@/sections/skill/SkillSecondSection";
import AlternateHome from "@/sections/home/AlternateHome";

// Read this server-side on each request so the environment can switch the home
// design without changing the existing homepage implementation.
export const dynamic = "force-dynamic";

export default function Home() {
  if (process.env.ENABLE_ALTERNATE_HOME === "true") {
    return <AlternateHome />;
  }

  return (
    <main className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 34rem 30rem at 8% 12%, rgba(163, 113, 247, 0.09), transparent 72%), radial-gradient(ellipse 34rem 32rem at 88% 54%, rgba(163, 113, 247, 0.075), transparent 72%), radial-gradient(ellipse 30rem 28rem at 92% 8%, rgba(211, 233, 122, 0.035), transparent 72%)',
        }}
      />
      <Header />
      <HomeSecondSection />
      <SkillSecondSection variant="home" />
      <Footer />
    </main>
  );
}
