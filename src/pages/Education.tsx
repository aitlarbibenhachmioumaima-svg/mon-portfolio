import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Education | Oumaima Portfolio</title>
        <meta
          name="description"
          content="Formations académiques de Oumaima à Marrakech en systèmes d'informations répartis et informatique."
        />
      </Helmet>

      <div className="grid gap-6">
        <h2 className="text-2xl font-bold">Formations</h2>

        {education.map((edu) => (
          <Card key={edu.school + edu.degree}>
            <CardContent className="p-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {edu.school} • {edu.period}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
