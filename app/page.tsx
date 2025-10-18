import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-sky-50 dark:from-slate-900 dark:to-slate-800 p-8">
      <section className="w-full max-w-3xl rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-gray-200 dark:border-slate-700 p-8 shadow-lg">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-sky-700 dark:text-sky-300">
            SurabayaJS
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Komunitas JavaScript Surabaya
          </p>
        </header>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Selamat datang, peserta JDD!
          </h2>

          <p className="text-gray-700 dark:text-gray-200">
            Halo peserta Jatim Developer Day (JDD) — terima kasih sudah
            bergabung. Ini adalah halaman singkat SurabayaJS untuk menyapa dan
            memberi informasi cepat tentang komunitas kami.
          </p>

        </div>

        <footer className="mt-8 text-xs text-center text-gray-500 dark:text-gray-400">
          Nisbah singkat — selamat belajar dan bersenang-senang di JDD!
        </footer>
      </section>
    </main>
  );
}
