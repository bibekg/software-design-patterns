public interface TravelStrategy {
  public void travel();
}

public class DriveStrategy implements TravelStrategy{
  public void travel() {
    console.log('Driving');
  }
}

public class WalkStrategy implements TravelStrategy {
  public void travel() {
    console.log('Walking');
  }
}

public class Traveler {
  TravelStrategy travelStrategy;
  public void travel() {
    travelStrategy.travel();
  }
}
