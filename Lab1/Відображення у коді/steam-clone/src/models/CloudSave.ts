export interface CloudSave {
  id: number;
  userId: number; // FK -> User
  gameId: number; // FK -> Game
  saveData: Map<string, any>;
  lastUpdated: Date;
}
