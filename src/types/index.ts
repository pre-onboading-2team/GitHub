// TODO: 타입 정의
export type AssigneeProps = any;
export type AssigneesProps = any;
export type LabelsProps = any;
export type MilestoneProps = any;
export type ReactionsProps = any;

export type UserProps = {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
};

export type IssueProps = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: UserProps;
  labels: LabelsProps;
  state: string;
  locked: boolean;
  assignee: AssigneeProps;
  assignees: AssigneesProps;
  milestone: MilestoneProps;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: any;
  author_association: string;
  active_lock_reason: any;
  body: string;
  closed_by: any;
  reactions: ReactionsProps;
  timeline_url: string;
  performed_via_github_app: any;
  state_reason: any;
};
