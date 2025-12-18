import { TeamMember } from "@/models/TeamMember"
import Image from "next/image"

export default function TrusteeCard({ member }: { member: TeamMember }) {
    return (
      <div className="bg-background rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
        {/* Image */}
        <div className="aspect-square relative bg-secondary/5">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-5">
          <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-1">
            {member.title}
          </p>
          <h3 className="text-lg font-serif font-semibold text-primary mb-3">
            {member.name}
          </h3>
        </div>
      </div>
    )
  }