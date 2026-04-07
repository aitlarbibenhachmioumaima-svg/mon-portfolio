import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets | Oumaima Portfolio</title>
        <meta
          name="description"
          content="Découvrez les projets académiques et techniques de Oumaima en Java, Laravel, SQL et développement web."
        />
      </Helmet>

      <div className="grid gap-6">
        <h2 className="text-2xl font-bold">Mes Projets</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
