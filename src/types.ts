export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  transitionTag: string;
  websiteUrl?: string;
  description: string;
  technologies: string[];
  editorialHeadline?: string;
  technicalLayers: {
    label: string;
    sublabel?: string;
  }[];
  overview: string;
  whatIBuilt: string[];
  role: string;
  timeline: string;
  architectureDiagram: {
    from: string;
    to: string;
    protocol: string;
  }[];
}

export interface ArchitectureLayer {
  id: string;
  number: string;
  name: string;
  tools: string[];
  description: string;
  codeSnippet?: string;
  metrics: { label: string; value: string }[];
}

export interface PipelineStage {
  id: string;
  label: string;
  subtext: string;
  iconName: string;
  logMessage: string;
  status: 'pending' | 'running' | 'success';
}
