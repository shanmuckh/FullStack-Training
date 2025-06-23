package Day_4;

public class trial {
    interface A {
        default void show() { System.out.println("A"); }
    }

    interface B extends A {
        default void show() { System.out.println("B"); }
    }

    interface C extends A {
        default void show() { System.out.println("C"); }
    }

    class D implements B {}

    //int x = 10;
    //int y = 20;

    public static void main(String[] args) {
        new trial().new D().show(); 
        //System.out.println(x);
    }
}
