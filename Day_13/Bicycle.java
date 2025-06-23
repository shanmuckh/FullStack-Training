public class Bicycle implements Vehicle {
    @Override
    public void start() {
        System.out.println("Bicycle is starting.");
    }

    @Override
    public void stop() {
        System.out.println("Bicycle is stopping.");
    }

    @Override
    public void drive() {
        System.out.println("Bicycle is being ridden.");
    }
    
}
