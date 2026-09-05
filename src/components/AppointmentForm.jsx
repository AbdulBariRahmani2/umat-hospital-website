import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { specialties } from "@/data/specialties";

export default function AppointmentForm({ title = "Request an Appointment", className = "" }) {
  const [searchParams] = useSearchParams();
  const [sent, setSent] = useState(false);
  const presetDept = searchParams.get("dept") || "";
  const presetDoctor = searchParams.get("doctor") || "";

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <div className={`relative rounded-[2rem] border border-border/70 bg-card p-8 lg:p-10 shadow-xl shadow-foreground/5 ${className}`}>
      <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Submit a request and our team will contact you to confirm your appointment.
      </p>

      <form key={searchParams.toString()} onSubmit={onSubmit} className="mt-7 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" placeholder="+93 ..." required />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="you@email.com" required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="dept">Department</Label>
            <select
              id="dept"
              name="dept"
              defaultValue={presetDept}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">Select a department</option>
              {specialties.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="date">Preferred date</Label>
            <Input id="date" type="date" name="date" />
          </div>
        </div>
        {presetDoctor && (
          <div className="space-y-1.5">
            <Label htmlFor="doctor">Preferred physician</Label>
            <Input id="doctor" name="doctor" defaultValue={presetDoctor} />
          </div>
        )}
        <div className="space-y-1.5">
          <Label htmlFor="message">Reason for visit</Label>
          <Textarea id="message" name="message" placeholder="Briefly describe your concern" rows={3} />
        </div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary" />
          <span>I consent to UIH contacting me about my appointment request.</span>
        </label>
        <Button type="submit" size="lg" className="w-full rounded-full shadow-md">
          {sent ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" /> Request received
            </>
          ) : (
            <>
              Submit request <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm font-medium text-primary"
          >
            Thank you — our team will reach out shortly.
          </motion.p>
        )}
      </form>
    </div>
  );
}
