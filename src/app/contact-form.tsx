import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  subject: z.string().min(2).max(50),
  content: z.string().min(2).max(1000),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.location.href = `mailto:phinnguyenlong@gmail.com?subject=${values.subject}"&body=${values.content}`;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-200 text-black/80" placeholder="Hello there" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="How can I help you?"
                  className="h-40 w-full resize-none bg-slate-200 text-black/80"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <button
          className="inline-flex justify-center gap-2 rounded-3xl bg-black px-6 py-3 text-base font-medium hover:opacity-70 md:w-full"
          type="submit"
        >
          Send to my email
        </button>
      </form>
    </Form>
  );
}
