import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CertificationsPage() {
  return (
    <>
      <Helmet>
        <title>Certifications | Oumaima Portfolio</title>
        <meta
          name="description"
          content="Certifications professionnelles de Oumaima en Hibernate, Spring, React et technologies Java."
        />
      </Helmet>

      <div className="grid gap-6">
        <h2 className="text-2xl font-bold">Certifications</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <Card
              key={c.title}
              className="transition duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <CardContent className="flex flex-col items-center p-4 text-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="mb-3 h-32 w-32 rounded-lg border p-2 object-contain transition duration-300 hover:scale-110 dark:border-slate-700"
                />

                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>

                <a href={c.link} target="_blank" rel="noreferrer">
                  <Button className="mt-3" variant="outline">
                    Voir certificat
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
