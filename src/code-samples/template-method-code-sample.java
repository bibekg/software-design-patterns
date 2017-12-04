public abstract class CaffeineBeverage {
  final void prepareRecipe() {
    boilWater();
    brew();
    pourInCup();
    addCondiments();
  }

  // Left to concrete classes to implement
  abstract void brew();

  // Hook, definition left empty but can be overriden by subclasses to
  // add desired functionality
  void addCondiments() {}
}

 public class Tea extends CaffeineBeverage {
   public void brew() {
     System.out.println("Steeping tea");
   }
 }

 public class SweetTea extends Tea {
   // Implementing the optional hook
   public void addCondiments() {
     System.out.println("Adding honey");
   }
 }

 public class Coffee extends CaffeineBeverage {
   public void brew() {
     System.out.println("Dripping coffee through filter");
   }
   public void addCondiments() {
     System.out.println("Adding sugar and milk");
   }
 }
