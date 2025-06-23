// write a java applcation that has one interface and one java class.
// java class should override the abstract method from the interface.
// interface should have atleast have one abstract method method, one default method, one static method.
// default and static should be accessed by the class.

@FunctionalInterface
  interface Vehicles {
    void start();
    static void stop(){
        System.out.println("stopping...");
    }
    default void drive(){
        System.out.println("driving");
    }
}
public class prg5 implements Vehicles {

        public void start() {
          System.out.println("Bicycle is starting.");
        }

        public static void main(String[] args) {
            prg5 b = new prg5();
            b.drive();
            b.start();
            Vehicles.stop();
    }
}
