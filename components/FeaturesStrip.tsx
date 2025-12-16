'use client';

import { Clock, Award, Lightbulb, Truck, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Clock,
    text: 'ייצור מהיר ומדויק',
    color: 'text-primary-600'
  },
  {
    icon: Award,
    text: 'איכות ללא פשרות',
    color: 'text-accent-600'
  },
  {
    icon: Lightbulb,
    text: 'ייעוץ מקצועי חינם',
    color: 'text-primary-600'
  },
  {
    icon: Truck,
    text: 'משלוח מהיר לכל הארץ',
    color: 'text-accent-600'
  },
  {
    icon: MessageCircle,
    text: 'שירות אישי בווטסאפ',
    color: 'text-primary-600'
  }
];

export default function FeaturesStrip() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                  index % 2 === 0 ? 'from-primary-100 to-primary-200' : 'from-accent-100 to-accent-200'
                } flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <p className="text-gray-800 font-semibold text-lg">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

