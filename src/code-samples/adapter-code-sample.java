public class Adaptee {
  public Adaptee() {}
  public void undesiredInterface() {
    System.out.println("I'm doing something!");
  }
}

public interface Target {
  public void desiredInterface();
}

public class Adaptor implements Target {
  Adaptee adaptee;
  public Adaptor(Adaptee a) {
    this.adaptee = a;
  }
  
  public void desiredInterface() {
    adaptee.undesiredInterface();
  }
}

public class Client {
  public static void main(String args[]) {
    Adaptee adaptee = new Adaptee();
    Target adaptor = new Adaptor(adaptee);
    adaptor.desiredInterface();
  }
}
