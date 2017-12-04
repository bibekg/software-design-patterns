public abstract class CarFactory { // Abstract creator
  // Factory method -- delegated to concrete factories
  // (e.g. Honda, Toyota) to implement to their own choosing
  protected abstract Car createCar(String type);

  public Car orderCar(String type) {
    Car car = createCar(type);
    car.assemble();
    car.paint();
    return car;
  }
}

public class HondaFactory implements CarFactory { // Concrete creator
  Car createCar(String type) {
    if (type.equals("sedan")) {
      return new HondaSedan();
    } else if (type.equals("suv")) {
      return new HondaSUV();
    } else return null;
  }
}

public class ToyotaFactory implements CarFactory { // Concrete creator
  Car createCar(String type) {
    if (type.equals("sedan")) {
      return new ToyotaSedan();
    } else if (type.equals("suv")) {
      return new ToyotaSUV();
    } else return null;
  }
}

public abstract class Car { // Abstract product
  String name;
  int seats;

  void assemble() {
    System.out.println("Assembling " + name);
    System.out.println("Adding " + seats + " seats");
  }

  void paint() {
    System.out.println("Painting car");
  }
}

public class HondaSedan extends Car { // Concrete product
  public HondaSedan() {
    name = 'Honda Accord';
    seats = 4;
  }
}

public class ToyotaSedan extends Car { // Concrete product
  public ToyotaSedan() {
    name = 'Toyota Corolla';
    seats = 4;
  }
}

public class HondaSUV extends Car { // Concrete product
  public HondaSUV() {
    name = 'Honda Pilot';
    seats = 7;
  }
}

public class ToyotaSUV extends Car { // Concrete product
  public ToyotaSUV() {
    name = 'Toyota RAV-4';
    seats = 7;
  }
}
