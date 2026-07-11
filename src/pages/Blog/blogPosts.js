import ctfCover from "./content/ctf-140526/cover.webp";
import ctfArticleCover from "./content/ctf-140526/cover_horizontal.webp";
import ctfMarkdown from "./content/ctf-140526/text.md?raw";
import ctfMarkdownRu from "./content/ctf-140526/text-ru.md?raw";

import historyProjectCover from "./content/history-project-250326/cover_horizontal.webp";
import historyProjectMarkdown from "./content/history-project-250326/text.md?raw";
import historyProjectMarkdownRu from "./content/history-project-250326/text-ru.md?raw";

import bugTermCover from "./content/bug-term-030726/cover.webp";
import bugTermArticleCover from "./content/bug-term-030726/cover_horizontal.webp";
import bugTermMarkdown from "./content/bug-term-030726/text.md?raw";
import bugTermMarkdownRu from "./content/bug-term-030726/text-ru.md?raw";

import elizaCover from "./content/eliza-050726/cover.webp";
import elizaArticleCover from "./content/eliza-050726/cover_horizontal.webp";
import elizaMarkdown from "./content/eliza-050726/text.md?raw";
import elizaMarkdownRu from "./content/eliza-050726/text-ru.md?raw";

import dotcomBubbleCover from "./content/dotcom-bubble-060726/cover.webp";
import dotcomBubbleArticleCover from "./content/dotcom-bubble-060726/cover_horizontal.webp";
import dotcomBubbleMarkdown from "./content/dotcom-bubble-060726/text.md?raw";
import dotcomBubbleMarkdownRu from "./content/dotcom-bubble-060726/text-ru.md?raw";

import emojiHistoryCover from "./content/emoji-history-080726/cover_horizontal.webp";
import emojiHistoryMarkdown from "./content/emoji-history-080726/text.md?raw";
import emojiHistoryMarkdownRu from "./content/emoji-history-080726/text-ru.md?raw";

import brainfCover from "./content/brainf-esolang-110726/cover.png";
import brainfArticleCover from "./content/brainf-esolang-110726/cover_horizontal.webp";
import brainfMarkdown from "./content/brainf-esolang-110726/text.md?raw";
import brainfMarkdownRu from "./content/brainf-esolang-110726/text-ru.md?raw";

export const BLOG_POSTS = [
  {
    id: 6,
    slug: "brainf-esolang-110726",
    titleKey: "brainf",
    categoryKey: "essay",
    date: { day: 11, monthKey: "jul", year: 2026 },
    cover: brainfCover,
    articleCover: brainfArticleCover,
    markdown: brainfMarkdown,
    markdownRu: brainfMarkdownRu,
  },
  {
    id: 5,
    slug: "emoji-history-080726",
    titleKey: "emojiHistory",
    categoryKey: "essay",
    date: { day: 8, monthKey: "jul", year: 2026 },
    cover: emojiHistoryCover,
    articleCover: emojiHistoryCover,
    markdown: emojiHistoryMarkdown,
    markdownRu: emojiHistoryMarkdownRu,
  },
  {
    id: 4,
    slug: "dotcom-bubble-060726",
    titleKey: "dotcomBubble",
    categoryKey: "essay",
    date: { day: 6, monthKey: "jul", year: 2026 },
    cover: dotcomBubbleCover,
    articleCover: dotcomBubbleArticleCover,
    markdown: dotcomBubbleMarkdown,
    markdownRu: dotcomBubbleMarkdownRu,
  },
  {
    id: 3,
    slug: "eliza-050726",
    titleKey: "eliza",
    categoryKey: "essay",
    date: { day: 5, monthKey: "jul", year: 2026 },
    cover: elizaCover,
    articleCover: elizaArticleCover,
    markdown: elizaMarkdown,
    markdownRu: elizaMarkdownRu,
  },
  {
    id: 2,
    slug: "bug-term-030726",
    titleKey: "bugTerm",
    categoryKey: "essay",
    date: { day: 3, monthKey: "jul", year: 2026 },
    cover: bugTermCover,
    articleCover: bugTermArticleCover,
    markdown: bugTermMarkdown,
    markdownRu: bugTermMarkdownRu,
  },
  {
    id: 1,
    slug: "ctf-140526",
    titleKey: "ctf",
    categoryKey: "personal",
    date: { day: 14, monthKey: "may", year: 2026 },
    cover: ctfCover,
    articleCover: ctfArticleCover,
    markdown: ctfMarkdown,
    markdownRu: ctfMarkdownRu,
  },
  {
    id: 0,
    slug: "history-project-250326",
    titleKey: "historyProject",
    categoryKey: "personal",
    date: { day: 25, monthKey: "mar", year: 2026 },
    cover: historyProjectCover,
    articleCover: historyProjectCover,
    markdown: historyProjectMarkdown,
    markdownRu: historyProjectMarkdownRu,
  },
];

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getLocalizedPost(post, lang) {
  const [title, description] = lang.titles[post.titleKey];

  return {
    ...post,
    title,
    description,
    category: lang.categories[post.categoryKey],
    dateLabel: `${post.date.day} ${lang.months[post.date.monthKey]}, ${post.date.year}`,
    path: `/blog/${post.slug}`,
  };
}
