export type OwnershipType = "wishlist" | "rented" | "purchased";
export type GameStatus = "installed" | "not installed" | "in progress";

export interface Library {
  id: number;
  userId: number; // FK -> User
  gameId: number; // FK -> Game
  ownershipType: OwnershipType;
  status: GameStatus;
  hoursPlayed: number;
  lastPlayed: Date;
}
