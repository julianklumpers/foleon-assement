export interface QueryOptions {
  page?: number;
  limit?: number;
  filter?: {
    field: string;
    type: string;
    value: string;
  }[];
  "order-by"?: {
    field: string;
    type: string;
    direction: string;
  }[];
}
