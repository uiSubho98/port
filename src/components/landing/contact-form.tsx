"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto text-lg py-6 px-8" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { success: false, message: "" };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-lg">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" required className="py-6 text-lg" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg">Email</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required className="py-6 text-lg" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-lg">Message</Label>
        <Textarea id="message" name="message" placeholder="Let's build something amazing together!" required rows={6} className="text-lg" />
      </div>
      <div className="text-center">
        <SubmitButton />
      </div>
    </form>
  );
}
