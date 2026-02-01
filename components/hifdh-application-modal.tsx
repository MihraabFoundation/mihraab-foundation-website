'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BookOpen, AlertCircle } from "lucide-react"

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 10)
  if (digits.length <= 3) return digits ? `(${digits}` : ""
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`
}

const PHONE_REGEX = /^\(\d{3}\) \d{3} \d{4}$/

interface HifdhApplicationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface ApplicationFormData {
  parentFirstName: string
  parentLastName: string
  parentEmail: string
  parentPhone: string
  studentFirstName: string
  studentLastName: string
  studentAge: string
  memorizedAmount: string
  canReadWithTajwid: string
  previouslyEnrolled: string
  previousProgramDetails?: string
}

export default function HifdhApplicationModal({
  open,
  onOpenChange,
}: HifdhApplicationModalProps) {
  const form = useForm<ApplicationFormData>({
    defaultValues: {
      parentFirstName: "",
      parentLastName: "",
      parentEmail: "",
      parentPhone: "",
      studentFirstName: "",
      studentLastName: "",
      studentAge: "",
      memorizedAmount: "",
      canReadWithTajwid: "",
      previouslyEnrolled: "",
      previousProgramDetails: "",
    },
  })

  const watchedPreviouslyEnrolled = form.watch("previouslyEnrolled")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch("/api/hifdh-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit application")
      }

      onOpenChange(false)
      form.reset()
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-serif font-bold text-primary">
              Hifdh Application
            </DialogTitle>
          </div>
          <DialogDescription className="text-base">
            <div className="flex items-start gap-2 mt-2 p-3 bg-secondary/30 rounded-md border border-primary/20">
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground/90 leading-relaxed">
                Upon submission of the application you will be contacted to arrange an assessment. 
                Submission of the application does not guarantee acceptance into the program. All applicants 
                will be assessed and the final decision will be made by the program Director, Qari Osman Shareef.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">
            {/* Parent/Guardian Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Parent/Guardian Information
                </h3>
                <Separator className="mb-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="parentFirstName"
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentLastName"
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="parentEmail"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parentPhone"
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: PHONE_REGEX,
                    message: "Please enter a valid phone number (e.g., (555) 123 4567)",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(555) 123 4567"
                        {...field}
                        onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Student Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Student Information
                </h3>
                <Separator className="mb-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentFirstName"
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentLastName"
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="studentAge"
                rules={{ required: "Student age is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Age" min="1" max="18" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="memorizedAmount"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How much Qur'ān does he currently have memorized?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 5 juz, 10 surahs, etc."
                        className="min-h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="canReadWithTajwid"
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Is he currently able to read Qur'ān with sound tajwīd?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="tajwid-yes" />
                          <label htmlFor="tajwid-yes" className="text-sm font-medium leading-none cursor-pointer">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="tajwid-no" />
                          <label htmlFor="tajwid-no" className="text-sm font-medium leading-none cursor-pointer">
                            No
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="tajwid-unknown" />
                          <label htmlFor="tajwid-unknown" className="text-sm font-medium leading-none cursor-pointer">
                            I don't know
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previouslyEnrolled"
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Is he currently or has he been previously enrolled in a hifdh program?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="enrolled-yes" />
                          <label htmlFor="enrolled-yes" className="text-sm font-medium leading-none cursor-pointer">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="enrolled-no" />
                          <label htmlFor="enrolled-no" className="text-sm font-medium leading-none cursor-pointer">
                            No
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="enrolled-unknown" />
                          <label htmlFor="enrolled-unknown" className="text-sm font-medium leading-none cursor-pointer">
                            I don't know
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {watchedPreviouslyEnrolled === "yes" && (
                <FormField
                  control={form.control}
                  name="previousProgramDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        If yes, then which program and who was/is his teacher?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide details about the program and teacher"
                          className="min-h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            {submitError && (
              <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                {submitError}
              </div>
            )}

            <Separator />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
