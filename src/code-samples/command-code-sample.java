public interface Order { // Command
  public void makeOrder();
}

public interface Cook(){ // Receiver
  makeSoup();
  makeToast();
}

public class Waitress { // Invoker
  Order currentOrder;
  public Waitress() {}

  public void tellOrder(Order o) {
    this.currentOrder = o;
  }

  public void submitOrder() {
    currentOrder.makeOrder();
  }
}

public class SoupOrder implements Order {
  Cook cook;

  public SoupOrder(Cook c) {
    this.cook = c;
  }

  public void makeOrder() {
    cook.makeSoup();
  }
}

public class Client {
  public static void main(String[] args) {
    Waitress thisWaitress = new Waitress();
    Cook thisCook = new Cook();

    // One quirk about this example is that we need to instantiate
    // order objects that know the cook at creation time
    thisWaitress.tellOrder(new SoupOrder(thisCook))
    thisWaitress.submitOrder();
  }
}
