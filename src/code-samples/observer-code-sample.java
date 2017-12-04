public interface Observer {
  public void update(State s1, State s2);
}
public interface Subject {
  public void attach(Observer o);
  public void detach(Observer o);
  public void notify();
}

public class AppWindow implements Subject {
  private ArrayList observers;
  private State width;
  private State height;
  public AppWindow() {
    observers = new ArrayList();
  }
  public void attach(Observer o) {
    observers.add(o);
  }
  public void detach(Observer o) {
    int i = observers.idnexOf(o);
    if (i >= 0) observers.remove(i);
  }
  public void notify() {
    for (Observer o : observers) {
      o.update(width, height);
    }
  }
  public void setStates(State width, State height) {
    this.width = width; this.height = height;
    notify();
  }
}

public class ObserveAndLog implements Observer {
  private Subject subject;
  public ObserverA(Subject s) {
    this.subject = s;
    subject.attach(this);
  }
  public void update(State width, State height) {
    System.out.println(width + " " + height);
  }
}

public class Client {
  public static void main(String[] args) {
    AppWindow aw = new AppWindow();
    Observer logger = new ObserveAndLog();
    subject.setStates(800, 600);
    // Causes ObserveAndLog::update(800,600) invocation which prints
    // "800 600"
  }
}
