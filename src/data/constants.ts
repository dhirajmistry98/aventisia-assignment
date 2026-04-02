export interface KnowledgeBaseItem {
  id: string;
  title: string;
  description: string;
  createdOn: string;
}

export const KNOWLEDGE_BASE_ITEMS: KnowledgeBaseItem[] = [
  {
    id: "1",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: "2",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: "3",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: "4",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: "5",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    id: "6",
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
];

export const VECTOR_STORE_OPTIONS = ["Qdrant", "Pinecone", "Weaviate", "Chroma"];

export const LLM_EMBEDDING_OPTIONS = [
  "text-embedding-ada-002",
  "text-embedding-3-small",
  "text-embedding-3-large",
];

export const ROWS_PER_PAGE_OPTIONS = [10, 20, 50];