export const WHATSAPP_NUMBER = "917019260151";
export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
export const projects = [
  {
    slug: "stillwood-residence",
    number: "01",
    title: "The Stillwood Residence",
    category: "Residential · Warm minimalism",
    short: "Natural oak, warm neutrals and soft lighting create a calm, functional home.",
    location: "Bengaluru, India",
    year: "Concept study · 2026",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90"
    ],
    brief: "A home imagined as a quiet retreat from the pace of the city, with warmth, clarity and everyday comfort guiding the design direction.",
    direction: "Natural oak, soft ivory, tactile fabrics and layered lighting establish a gentle material palette. The concept prioritises visual calm without losing the character of the people who live there.",
    details: ["Warm timber and tactile finishes", "Layered ambient and task lighting", "Comfort-led furniture planning", "A restrained, natural colour palette"]
  },
  {
    slug: "monolith-apartment",
    number: "02",
    title: "The Monolith Apartment",
    category: "Urban apartment · Contemporary",
    short: "Stone textures, charcoal accents and sculptural furniture create a refined urban interior.",
    location: "Bengaluru, India",
    year: "Concept study · 2026",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=90"
    ],
    brief: "A contemporary apartment concept that explores contrast, clean geometry and a more architectural interpretation of urban living.",
    direction: "Stone-inspired surfaces and charcoal details are balanced by soft upholstery and warm light. Clear sightlines and carefully edited furnishings keep the space feeling composed.",
    details: ["Stone and dark accent surfaces", "Sculptural furniture silhouettes", "Defined living and dining zones", "Warm lighting against cooler materials"]
  },
  {
    slug: "solace-residence",
    number: "03",
    title: "The Solace Residence",
    category: "Private home · Soft neutrals",
    short: "Textured walls, natural materials and layered lighting bring warmth to everyday living.",
    location: "Concept location",
    year: "Concept study · 2026",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
    ],
    brief: "A restful home concept shaped around softness, tactile surfaces and a sense of visual ease.",
    direction: "A palette of cream, sand and pale timber is paired with layered fabrics and quiet decorative elements to create a cohesive, lived-in feeling.",
    details: ["Soft neutral colour story", "Natural textures and tactile fabrics", "Layered lighting", "Calm, uncluttered styling"]
  },
  {
    slug: "walnut-house",
    number: "04",
    title: "The Walnut House",
    category: "Kitchen & dining · Natural modern",
    short: "A warm combination of timber, stone and understated lighting for the heart of the home.",
    location: "Concept location",
    year: "Concept study · 2026",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90"
    ],
    brief: "A kitchen and dining concept where daily rituals are supported by practical planning and a cohesive material story.",
    direction: "Walnut tones and stone-like surfaces are paired with simple forms and warm lighting. The visual language is calm, but with enough contrast to give the space depth.",
    details: ["Material coordination across zones", "Functional kitchen planning", "Warm timber accents", "Simple, considered lighting"]
  },
  {
    slug: "urban-nest",
    number: "05",
    title: "The Urban Nest",
    category: "Compact home · Smart living",
    short: "Flexible furniture and considered storage make a smaller home work harder.",
    location: "Concept location",
    year: "Concept study · 2026",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=90"
    ],
    brief: "A compact-living concept focused on making each zone useful without making the home feel crowded.",
    direction: "Built-in storage, flexible furniture and a restrained palette help the home feel organised and visually open.",
    details: ["Multi-functional furniture", "Integrated storage ideas", "Clear circulation paths", "Light-reflective colours and finishes"]
  },
  {
    slug: "form-office",
    number: "06",
    title: "The Form Office",
    category: "Commercial · Workspace concept",
    short: "A modern workspace balancing clarity, material warmth and purposeful design.",
    location: "Bengaluru, India",
    year: "Concept study · 2026",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90"
    ],
    brief: "A workspace concept intended to support focused work, collaboration and a clear visual identity.",
    direction: "A warm neutral palette, defined work zones and restrained furnishings create a professional atmosphere without feeling clinical.",
    details: ["Clear work and collaboration zones", "Warm, professional material palette", "Comfort-minded furniture choices", "Purposeful lighting and circulation"]
  }
] as const;
