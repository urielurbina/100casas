"use client";

import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}