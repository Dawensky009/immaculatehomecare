import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const certifications = [
  "CNA (Certified Nursing Assistant)",
  "HHA (Home Health Aide)",
  "LPN (Licensed Practical Nurse)",
  "RN (Registered Nurse)",
  "CPR / BLS Certified",
  "First Aid Certified",
];

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Valid phone number is required")
    .max(20)
    .regex(/^[\d\s\-()+]+$/, "Enter a valid phone number"),
  email: z.string().trim().email("Valid email is required").max(255),
  position: z.string().min(1, "Select a position"),
  experience: z.string().min(1, "Select years of experience"),
  certifications: z
    .array(z.string())
    .min(1, "Select at least one certification"),
  authorizedToWork: z.string().min(1, "This field is required"),
  caregivingExperience: z
    .string()
    .trim()
    .min(10, "Please describe your experience (at least 10 characters)")
    .max(2000),
  preferredSchedule: z.string().min(1, "Select a preferred schedule"),
  preferredContact: z.string().min(1, "Select a contact method"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export function ApplicationForm() {
  const { toast } = useToast();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      position: "",
      experience: "",
      certifications: [],
      authorizedToWork: "",
      caregivingExperience: "",
      preferredSchedule: "",
      preferredContact: "",
    },
  });

  function onSubmit(data: ApplicationFormData) {
    // Client-side only for now
    toast({
      title: "Application Submitted!",
      description: `Thank you, ${data.fullName}. We'll review your application and contact you soon.`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email + Position */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position Applying For *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CNA">CNA – Certified Nursing Assistant</SelectItem>
                    <SelectItem value="HHA">HHA – Home Health Aide</SelectItem>
                    <SelectItem value="LPN">LPN – Licensed Practical Nurse</SelectItem>
                    <SelectItem value="RN">RN – Registered Nurse</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Experience + Auth to work */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Experience *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-3">1 – 3 years</SelectItem>
                    <SelectItem value="3-5">3 – 5 years</SelectItem>
                    <SelectItem value="5-10">5 – 10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authorizedToWork"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Authorized to Work in the US? *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Certifications */}
        <FormField
          control={form.control}
          name="certifications"
          render={() => (
            <FormItem>
              <FormLabel>Certifications / Licenses Held *</FormLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {certifications.map((cert) => (
                  <FormField
                    key={cert}
                    control={form.control}
                    name="certifications"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2.5 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(cert)}
                            onCheckedChange={(checked) => {
                              const updated = checked
                                ? [...(field.value || []), cert]
                                : field.value?.filter((v: string) => v !== cert);
                              field.onChange(updated);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          {cert}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Caregiving experience */}
        <FormField
          control={form.control}
          name="caregivingExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Your Caregiving Experience *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your experience, the types of patients you've cared for, and what drives you in this field..."
                  className="min-h-[120px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Schedule + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="preferredSchedule"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Work Schedule *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="full-time">Full-Time</SelectItem>
                    <SelectItem value="part-time">Part-Time</SelectItem>
                    <SelectItem value="per-diem">Per Diem</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6"
        >
          <Send className="w-5 h-5 mr-2" />
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
