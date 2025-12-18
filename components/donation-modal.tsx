"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CreditCard, Building2, ExternalLink } from "lucide-react"

interface DonationModalProps {
  children: React.ReactNode
}

export default function DonationModal({ children }: DonationModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            General Donation
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="daf" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              DAF Direct
            </TabsTrigger>
            <TabsTrigger value="endowment" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Endowment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Make a direct donation to support Mihraab Foundation's programs and operations.
              </p>
              {/* CharityStack General Donation Embed */}
              <div className="min-h-[400px] border border-primary/10 rounded-lg p-4 bg-secondary/5">
                <div data-entity="EMBED_FORM" data-source="CharityStack" id="309156f3-2e11-4150-bc99-b7a482f52247"></div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="daf" className="mt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Donate directly from your Donor Advised Fund (DAF) to support our mission.
              </p>
              {/* CharityStack DAF Embed */}
              <div className="min-h-[400px] border border-primary/10 rounded-lg p-4 bg-secondary/5">
                <div id="charitystack-daf-donation" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="endowment" className="mt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Contribute to our endowment fund to provide long-term sustainable support for Mihraab Foundation.
              </p>
              <div className="border border-primary/10 rounded-lg p-8 bg-secondary/5 text-center">
                <p className="text-lg font-medium text-foreground mb-4">
                  Endowment Donation Form
                </p>
                <p className="text-muted-foreground mb-6">
                  Please use our dedicated endowment donation form to make your contribution.
                </p>
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href="https://host.nxt.blackbaud.com/donor-form/?svcid=renxt&formId=4a1d5b9e-a193-4d72-ba3d-87ac3178d985&envid=p-5cLbVsS2-UiTd73TgWOD8A&zone=usa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Open Endowment Form
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

