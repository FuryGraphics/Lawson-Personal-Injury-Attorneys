'use client';

import Link from 'next/link';
import { useState } from 'react';
import { blogCategories, blogPosts, type BlogCategory } from '@/lib/blog';

/**
 * Filterable post grid.
 *
 * Posts without a body do not link to a post page — there isn't one, and a card
 * that navigates to an empty article is worse than a card that says the piece is
 * being written. Each unpublished card links to the case-type page that covers
 * the same ground instead, so the grid is useful today rather than decorative.
 */
export default function BlogIndex() {
  const [active, setActive] = useState<BlogCategory | 'All'>('All');
  const posts = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-white/10 pb-6">
        <FilterButton label="All" active={active === 'All'} onClick={() => setActive('All')} />
        {blogCategories.map((c) => (
          <FilterButton key={c} label={c} active={active === c} onClick={() => setActive(c)} />
        ))}
      </div>

      <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-col bg-night p-8">
            <p className="label text-crest/60">{post.category}</p>
            <h3 className="mt-5 font-display text-[1.4rem] leading-snug text-white">
              {post.published ? (
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-crest">
                  {post.title}
                </Link>
              ) : (
                post.title
              )}
            </h3>
            <span className="mt-4 block h-[2px] w-10 bg-crest" aria-hidden="true" />
            <p className="mt-5 flex-1 text-[15px] leading-relaxed text-smoke">{post.excerpt}</p>

            {post.published ? (
              <Link href={`/blog/${post.slug}`} className="label mt-7 flex items-center gap-3 text-crest">
                Read the post
                <span className="h-px w-8 bg-current" />
              </Link>
            ) : (
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="label mb-3 text-white/35">Article in progress</p>
                <Link
                  href={post.relatedHref}
                  className="label flex items-center gap-3 text-crest transition-colors hover:text-crest-bright"
                >
                  Read the full guide instead
                  <span className="h-px w-8 bg-current" />
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="py-12 text-center text-smoke">Nothing in this category yet.</p>
      )}
    </>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`label border-b pb-1.5 transition-colors ${
        active ? 'border-crest text-crest' : 'border-transparent text-white/55 hover:text-crest'
      }`}
    >
      {label}
    </button>
  );
}
