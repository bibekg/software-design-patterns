public class Car {
  private final String make;
  private final String model;
  private final int year;
  private final int seats;

  // Private constructor
  private Car(Builder b) {
    this.make = b.make;
    this.model = b.model;
    this.year = b.year;
    this.seats = b.seats;
  }

  public static class Builder {
    // Required parameters
    private final String make;
    private final String model;
    // Optional parameters -- initialized to default values
    private int year = 2000;
    private int seats = 5;

    public Builder(String make, String model) {
      this.make = make;
      this.model = model;
    }

    public Builder year(int year) {
      this.year = year;
      return this;
    }

    public Builder seats(int seats) {
      this.seats = seats;
      return this;
    }

    public Car build() {
      // This is the only place where the private Car constructor is invoked
      return new Car(this);
    }
  }
}

public static void main(String[] args) {
  Car myCar = new Car.Builder('Tesla', 'Roadster').year(2020).seats(4).build()
}
