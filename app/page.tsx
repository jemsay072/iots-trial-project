import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Marketing Target Headline Grid */}
        <span className="text-xs font-black tracking-widest uppercase bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full">
          Chicago`s Auto Coverage Experts Since 1988
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
          Drive Safely with Affordable <br className="hidden md:inline" />
          <span className="text-blue-700">Auto & SR22 Insurance</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          Get the absolute lowest rates in Chicagoland. Quick verification approval setup and friendly agents ready to help you save today.
        </p>
        
        {/* Visual Link Control Handlers */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link href="/contact" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-black px-8 py-3.5 rounded-xl shadow-md transition uppercase tracking-wider text-xs text-center">
            Get A Free Quote &raquo;
          </Link>
          <Link href="/article" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-3.5 rounded-xl border border-slate-200 shadow-sm transition text-xs text-center">
            Read Insurance Tips &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}

