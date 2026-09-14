import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  subject: z.string().trim().nonempty({ message: "Please add a subject" }).max(150),
  message: z.string().trim().nonempty({ message: "Please add a message" }).max(1000),
});

type Field = keyof z.infer<typeof contactSchema>;

const initial = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const handleChange = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const next: Partial<Record<Field, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    const { name, email, subject, message } = result.data;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:yash.bheke2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the message ready to send.");
    setValues(initial);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={values.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" maxLength={100} />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@example.com" maxLength={255} />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" value={values.subject} onChange={(e) => handleChange("subject", e.target.value)} placeholder="What is this about?" maxLength={150} />
        {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} value={values.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell me a little about the role or project." maxLength={1000} />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" className="justify-self-start">
        <Send />
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
