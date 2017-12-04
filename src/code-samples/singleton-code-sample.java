public class GameBoard {
  // volatile ensures that the GameBoard instance is always retrieved from
  // main memory instead of cache; ensures thread safety
  private volatile static GameBoard board;
  private GameBoard() {}

  public static GameBoard getBoard() {
    if (board == null) {
      synchronized(GameBoard.class) {
        // Double-checked locking provides two benefits:
        // 1. board instance creation is thread-safe
        // 2. subsequent board instance retrievals don't apply a lock, thus
        //    making retrievals performant
        if (board == null) {
          board = new GameBoard();
        }
      }
    }
    return board;
  }
}
