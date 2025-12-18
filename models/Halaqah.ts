export interface Halaqah {
    name: string
    day: string
    time: string
    conductor: string
    flyer: string
    location: {
      name: string
      address: string
      mapEmbedUrl: string
    }
  }