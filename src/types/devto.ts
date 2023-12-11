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

export interface Article {
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
  user: ArticleUser;
}

export type ArticleUser = {
  user_id: number;
  profile_image_90: string;
} & Pick<
  User,
  | 'name'
  | 'username'
  | 'twitter_username'
  | 'github_username'
  | 'profile_image'
  | 'website_url'
>;
