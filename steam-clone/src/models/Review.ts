export interface Review {
  id: number;
  userId: number; // FK -> User
  gameId: number; // FK -> Game
  rating: number;
  text: string;
  createdAt: Date;
}
