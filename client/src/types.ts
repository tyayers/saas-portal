export interface ProjectDefinition {
  id: string;
  name: string;
  description: string;
  organs: string[];
  disease: string;
  team: string;
  status: string;
  docs: { name: string; content: string }[];
}

export interface WorkbenchDefinition {
  id: string;
  name: string;
  description: string;
  organ: string;
  status: string;
  lastUpdated: string;
  docs: { [key: string]: { name: string; content: string }[] };
}

export interface DatasetDefinition {
  id: string;
  name: string;
  source: string;
  status: string;
  organs?: string[];
  lastUpdated: string;
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
