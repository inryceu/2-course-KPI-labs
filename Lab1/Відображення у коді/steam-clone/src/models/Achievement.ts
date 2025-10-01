export interface Achievement {
  id: number;
  gameId: number; // FK -> Game
  title: string;
  description: string;
  icon: URL; 
}
