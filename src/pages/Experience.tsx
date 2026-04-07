import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Oumaima Portfolio</title>
        <meta
          name="description"
          content="Parcours académique, auto-formation et expériences de travail en équipe de Oumaima."
        />
      </Helmet>

      <div className="grid gap-6">
        <h2 className="text-2xl font-bold">Mon Parcours</h2>

        {experiences.map((exp) => (
          <Card key={exp.title}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">
                {exp.place} • {exp.period}
              </p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
