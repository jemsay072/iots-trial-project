import React from 'react';
import { mockArticlesDatabase } from '../src/data/mockData';
import ArticleCard from '@/app/src/components/ArticleCard';
import { PageBanner } from '../src/components/PageBanner';

export default function ArticleIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        title='Insurance Tips & Resources'
        breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Blog & Tips' }]} 
        description='Expert driving guidance and coverage optimization frameworks for Illinois motorists.'
        marginY='mb-0'
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Workspace Layout Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2 space-y-6">
            {mockArticlesDatabase.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </section>

          <aside className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit">
            <h3 className="font-extrabold text-sm text-blue-900 mb-2">Need Direct Assistance?</h3>
            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Our local Chicago verification staff is active.</p>
            <a href="tel:7732025060" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-sm transition">
              Call 773-202-5060
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}

