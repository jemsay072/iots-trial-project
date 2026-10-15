
export interface FAQItem{
    question: string;
    answer: string;
}

export interface Article {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    slug: string;
    content: string[];
    faqs: FAQItem[];
}

export interface Location {
    id: number;
    name: string;
    address: string;
    phone: string;
    hours?: string;
    city?: string;
}