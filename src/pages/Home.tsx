import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Accueil | Oumaima Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Oumaima, étudiante en systèmes d'informations répartis, spécialisée en développement web, Java, React et Spring Boot."
        />
      </Helmet>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-2 text-xl text-slate-700 dark:text-slate-300">
            {profile.role}
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {profile.about}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projects">
              <Button className="bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black">
                Voir projets
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline">Contact</Button>
            </Link>

            <a href="/cv.pdf" download>
              <Button variant="outline">Download CV</Button>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded border px-3 py-1 text-sm dark:border-slate-700 dark:bg-slate-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Card className="shadow-md dark:border-slate-800 dark:bg-slate-900">
          <CardContent className="space-y-2 p-6">
            <h2 className="text-lg font-semibold">Infos</h2>
            <p>📍 {profile.location}</p>
            <p>📧 {profile.email}</p>
            <p>📱 {profile.phone}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
