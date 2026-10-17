export interface Program {
  id: string;
  title: string;
  category: 'Digital Skills & Technology' | 'Fashion & Design' | 'Creative Arts' | 'Cultural Arts';
  duration: string;
  rating: number;
  image: string;
  description?: string;
  location?: string;
}