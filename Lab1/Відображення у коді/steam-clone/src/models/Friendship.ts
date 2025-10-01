export type FriendshipStatus = "pending" | "accepted" | "blocked";

export interface Friendship {
  userId: number; // FK -> User
  friendId: number; // FK -> User
  status: FriendshipStatus;
}
