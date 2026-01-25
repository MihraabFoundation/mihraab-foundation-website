"use client"

import { useForm } from "react-hook-form"
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
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ChaplainRequestFormData {
  requesterName: string
  requesterEmail: string
  requesterPhone: string
  youthName: string
  youthAge?: string
  requestType: string
  preferredDate?: string
  preferredTime?: string
  message: string
}

export default function ChaplainRequestForm() {
  const form = useForm<ChaplainRequestFormData>({
    defaultValues: {
      requesterName: "",
      requesterEmail: "",
      requesterPhone: "",
      youthName: "",
      youthAge: "",
      requestType: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  })

  const onSubmit = (data: ChaplainRequestFormData) => {
    console.log("Form submitted:", data)
    // TODO: Handle form submission
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Requester Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">
                Your Information
              </h3>
              <Separator className="mb-4" />
            </div>

            <FormField
              control={form.control}
              name="requesterName"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="requesterEmail"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requesterPhone"
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Youth Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">
                Youth Information
              </h3>
              <Separator className="mb-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="youthName"
                rules={{ required: "Youth name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Youth Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="youthAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age (Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Age" min="1" max="25" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Request Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">
                Request Details
              </h3>
              <Separator className="mb-4" />
            </div>

            <FormField
              control={form.control}
              name="requestType"
              rules={{ required: "Please select a request type" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Request</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
                    >
                      <option value="">Select a type...</option>
                      <option value="spiritual-guidance">Spiritual Guidance</option>
                      <option value="counseling">Counseling</option>
                      <option value="religious-questions">Religious Questions</option>
                      <option value="life-guidance">Life Guidance</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date (Optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time (Optional)</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Please provide details about your request" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about your request and any specific concerns or topics you'd like to discuss..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
              Submit Request
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
