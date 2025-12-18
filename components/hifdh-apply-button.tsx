'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import HifdhApplicationModal from "@/components/hifdh-application-modal"

export default function ApplyButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Apply Now
      </Button>
      <HifdhApplicationModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  )
}
