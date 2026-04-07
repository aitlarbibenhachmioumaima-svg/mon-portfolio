import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Oumaima Portfolio</title>
        <meta
          name="description"
          content="Contactez Oumaima pour un stage, une collaboration ou une opportunité professionnelle."
        />
      </Helmet>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Contact Me</h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            N'hésitez pas à me contacter pour un stage ou une collaboration.
          </p>

          <div className="mt-6 space-y-2">
            <p>📧 oumaimaaitlarbibenhachmi@gmail.com</p>
            <p>📱 +212 602864119</p>
            <p>📍 Marrakech, Maroc</p>
          </div>
        </div>

        <Card className="shadow-md dark:border-slate-800 dark:bg-slate-900">
          <CardContent className="space-y-4 p-6">
            <h3 className="text-lg font-semibold">Send Message</h3>

            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message..." rows={5} />

            <Button className="w-full bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
