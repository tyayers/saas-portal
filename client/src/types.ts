export interface ProjectDefinition {
  id: string;
  name: string;
  description: string;
  locationType: string;
  locationRegion: string;
  size: string;
}

export interface ExperimentDefinition {
  id: string;
  name: string;
  description: string;
  organ: string;
  status: string;
  lastUpdated: string;
  docs: { [key: string]: { name: string; content: string }[] };
}

export interface AssistantChatHistory {
  id: string | undefined;
  userEmail: string | null | undefined;
  userName: string | null | undefined;
  chats: AssistantChat[];
}

export interface AssistantChat {
  date: string;
  who: string;
  text: string;
}

export interface AssistantResult {
  question: string;
  answer: string;
}
