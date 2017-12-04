public class CeilingFan { // Context
  State offState = new CeilingFanOffState();
  State lowState = new CeilingFanLowState();
  State highState = new CeilingFanHighState();
  State state = offState;

  public CeilingFanState getOffstate() { return offState; }
  public CeilingFanState getLowState() { return lowState; }
  public CeilingFanState getHighState() { return highState; }

  public setState(CeilingFanState s) {
    this.state = s;
  }
}

public interface CeilingFanState { // State
  turnOff();
  setToLow();
  setToHigh();
}

public class CeilingFanOffState implements CeilingFanState {
  CeilingFan ceilingFan;
  public CeilingFanOffState(CeilingFan c) { this.ceilingFan = c; }

  turnOff() {}
  setToLow() { ceilingFan.setState(ceilingFan.getLowState()); }
  setToHigh() { ceilingFan.setState(ceilingFan.getHighState()); }
}

public class CeilingFanLowState implements CeilingFanState {
  CeilingFan ceilingFan;
  public CeilingFanLowState(CeilingFan c) { this.ceilingFan = c; }

  turnOff() { ceilingFan.setState(ceilingFan.getOffState(); )}
  setToLow() {}
  setToHigh() { ceilingFan.setState(ceilingFan.getHighState()); }
}

public class CeilingFanHighState implements CeilingFanState {
  CeilingFan ceilingFan;
  public CeilingFanHighState(CeilingFan c) { this.ceilingFan = c; }

  turnOff() { ceilingFan.setState(ceilingFan.getOffState(); )}
  setToLow() { ceilingFan.setState(ceilingFan.getLowState()); }
  setToHigh() {}
}
