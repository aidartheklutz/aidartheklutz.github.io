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

import anomCover from "./content/anom-130726/cover_horizontal.webp";
import anomArticleCover from "./content/anom-130726/cover_horizontal.webp";
import anomMarkdown from "./content/anom-130726/text.md?raw";
import anomMarkdownRu from "./content/anom-130726/text-ru.md?raw";

import httpStatusCodesCover from "./content/http-status-codes-170726/cover_horizontal.webp";
import httpStatusCodesArticleCover from "./content/http-status-codes-170726/cover_horizontal.webp";
import httpStatusCodesMarkdown from "./content/http-status-codes-170726/text.md?raw";
import httpStatusCodesMarkdownRu from "./content/http-status-codes-170726/text-ru.md?raw";

import mbtiCover from "./content/mbti-210726/cover_horizontal.webp";
import mbtiArticleCover from "./content/mbti-210726/cover_horizontal.webp";
import mbtiMarkdown from "./content/mbti-210726/text.md?raw";
import mbtiMarkdownRu from "./content/mbti-210726/text-ru.md?raw";

import doomCover from "./content/doom-280726/cover_horizontal.webp";
import doomArticleCover from "./content/doom-280726/cover_horizontal.webp";
import doomMarkdown from "./content/doom-280726/text.md?raw";
import doomMarkdownRu from "./content/doom-280726/text-ru.md?raw";

import internetExplorerCover from "./content/internet-explorer-020826/cover_horizontal.webp";
import internetExplorerArticleCover from "./content/internet-explorer-020826/cover_horizontal.webp";
import internetExplorerMarkdown from "./content/internet-explorer-020826/text.md?raw";
import internetExplorerMarkdownRu from "./content/internet-explorer-020826/text-ru.md?raw";

import y2kBugCover from "./content/y2k-bug-100826/cover_horizontal.webp";
import y2kBugArticleCover from "./content/y2k-bug-100826/cover_horizontal.webp";
import y2kBugMarkdown from "./content/y2k-bug-100826/text.md?raw";
import y2kBugMarkdownRu from "./content/y2k-bug-100826/text-ru.md?raw";

import openaiAttackCover from "./content/openai-attack-240826/cover_horizontal.webp";
import openaiAttackArticleCover from "./content/openai-attack-240826/cover_horizontal.webp";
import openaiAttackMarkdown from "./content/openai-attack-240826/text.md?raw";
import openaiAttackMarkdownRu from "./content/openai-attack-240826/text-ru.md?raw";

export const BLOG_POSTS = [
  {
    id: 13,
    slug: "openai-attack-240826",
    titleKey: "openaiAttack",
    categoryKey: "essay",
    date: { day: 24, monthKey: "aug", year: 2026 },
    cover: openaiAttackCover,
    articleCover: openaiAttackArticleCover,
    markdown: openaiAttackMarkdown,
    markdownRu: openaiAttackMarkdownRu,
  },
  {
    id: 12,
    slug: "y2k-bug-100826",
    titleKey: "y2kBug",
    categoryKey: "essay",
    date: { day: 10, monthKey: "aug", year: 2026 },
    cover: y2kBugCover,
    articleCover: y2kBugArticleCover,
    markdown: y2kBugMarkdown,
    markdownRu: y2kBugMarkdownRu,
  },
  {
    id: 11,
    slug: "internet-explorer-020826",
    titleKey: "internetExplorer",
    categoryKey: "essay",
    date: { day: 2, monthKey: "aug", year: 2026 },
    cover: internetExplorerCover,
    articleCover: internetExplorerArticleCover,
    markdown: internetExplorerMarkdown,
    markdownRu: internetExplorerMarkdownRu,
  },
  {
    id: 10,
    slug: "doom-280726",
    titleKey: "doom",
    categoryKey: "roundup",
    date: { day: 28, monthKey: "jul", year: 2026 },
    cover: doomCover,
    articleCover: doomArticleCover,
    markdown: doomMarkdown,
    markdownRu: doomMarkdownRu,
  },
  {
    id: 9,
    slug: "mbti-210726",
    titleKey: "mbti",
    categoryKey: "essay",
    date: { day: 21, monthKey: "jul", year: 2026 },
    cover: mbtiCover,
    articleCover: mbtiArticleCover,
    markdown: mbtiMarkdown,
    markdownRu: mbtiMarkdownRu,
  },
  {
    id: 8,
    slug: "http-status-codes-170726",
    titleKey: "httpStatusCodes",
    categoryKey: "explainer",
    date: { day: 17, monthKey: "jul", year: 2026 },
    cover: httpStatusCodesCover,
    articleCover: httpStatusCodesArticleCover,
    markdown: httpStatusCodesMarkdown,
    markdownRu: httpStatusCodesMarkdownRu,
  },
  {
    id: 7,
    slug: "anom-150726",
    titleKey: "anom",
    categoryKey: "essay",
    date: { day: 15, monthKey: "jul", year: 2026 },
    cover: anomCover,
    articleCover: anomArticleCover,
    markdown: anomMarkdown,
    markdownRu: anomMarkdownRu,
  },
  {
    id: 6,
    slug: "brainf-esolang-110726",
    titleKey: "brainf",
    categoryKey: "explainer",
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
