export type DevPubType = "developer" | "publisher" | "both";

export interface DevPub {
  id: number;
  name: string;
  contacts: Map<string, any>;
  logo: URL;
  type: DevPubType;
}

// has Game one-to-many