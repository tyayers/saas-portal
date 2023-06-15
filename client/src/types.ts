export interface ExperimentDefinition {
  id: string;
  name: string;
  description: string;
  organ: string;
  status: string;
  lastUpdated: string;
  docs: { [key: string]: { name: string; content: string }[] };
}
