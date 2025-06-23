// write a java program that has a constructor with one string as a parameter and 
// a method that prints the value passed to the constructor.
public class prg4 {
    private String value;

    public prg4(String value) {
        this.value = value;
    }

    public void printValue() {
        System.out.println("Value: " + value);
    }

    public static void main(String[] args) {
        prg4 obj = new prg4("Hello, World!");
        obj.printValue();
    }
}
