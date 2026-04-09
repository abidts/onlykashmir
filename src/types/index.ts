export interface Package {
  id: number;
  name: string;
  duration: string;
  image: string;
  destinations: string[];
  groupSize: string;
  rating: string;
  reviews: number;
  tag: string;
  tagColor: string;
  includes: string[];
  description?: string;
  price?: number;
  highlights?: string[];
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  reviewsList?: Array<{
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  images?: string[];
}

export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: string;
  reviews: number;
  tag: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: string;
  price: number;
  amenities: string[];
}

export interface Cab {
  id: number;
  type: string;
  name: string;
  image: string;
  capacity: number;
  pricePerKm: number;
  features: string[];
}
