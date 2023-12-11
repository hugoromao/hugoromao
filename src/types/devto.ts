export interface ArticleBySlug {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: any;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: any;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string;
  tags: string[];
  body_html: string;
  body_markdown: string;
  user: ArticleBySlugUser;
}
export interface ArticleBySlugUser {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: any;
  profile_image: string;
  profile_image_90: string;
}
export interface User {
  type_of: string;
  id: number;
  username: string;
  name: string;
  twitter_username: string;
  github_username: string;
  email: string;
  summary: string;
  location: string;
  website_url: string;
  joined_at: string;
  profile_image: string;
  badge_ids: number[];
  followers_count: number;
}

export type MyArticles = Root2[];

export interface Root2 {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: string;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: MyArticlesUser;
}
export interface MyArticlesUser {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: any;
  profile_image: string;
  profile_image_90: string;
}
