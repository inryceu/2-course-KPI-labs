export type EventType = "sale" | "free_weekend" | "giveaway";

export interface SaleEvent {
  id: number;
  gameId: number; // FK -> Game
  discount: number;
  startDate: Date;
  endDate: Date;
  eventType: EventType;
}
