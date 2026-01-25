"use client"

import { useEffect } from "react"
import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SeminaryRegisterPage() {
  useEffect(() => {
    // Initialize CharityStack embed when component mounts
    // The script is already loaded in the root layout
    // You may need to trigger the embed initialization here if CharityStack requires it
    // Check CharityStack documentation for specific initialization requirements
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Seminary Registration" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/scholastic-branch/seminary">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Seminary
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Register for Mihraab Seminary
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Complete the form below to enroll in the active quarter. Please ensure you have reviewed the course catalog
            before registering.
          </p>
        </div>

        {/* CharityStack Embed Container */}
        <div className="bg-background border border-border rounded-2xl p-8 md:p-12 min-h-[600px]">
          <div
            id="charitystack-embed-container"
            className="w-full"
            data-charitystack-id="M_ErMWEORbU0"
            // Add any additional CharityStack attributes here based on their documentation
          >
            {/* CharityStack form will be embedded here */}
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">
                Loading registration form...
              </p>
              <p className="text-sm text-muted-foreground">
                If the form does not appear, please contact us directly at{" "}
                <a href="mailto:info@mihraab.com" className="text-primary hover:underline">
                  info@mihraab.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-serif font-bold text-primary mb-4">Need Help?</h3>
          <p className="text-foreground/80 mb-4">
            If you have questions about registration or the program, please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@mihraab.com"
              className="text-primary hover:underline font-medium"
            >
              info@mihraab.com
            </a>
            <Link href="/scholastic-branch/seminary/curriculum" className="text-primary hover:underline font-medium">
              View Course Catalog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
