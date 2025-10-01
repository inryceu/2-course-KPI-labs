export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  age: number;
  region: string;
  avatar: URL;
  createdAt: Date;
  lastLogin: Date;
}

// has Library one-to-many