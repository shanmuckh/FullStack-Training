// write a java abstract class that has 2 abstract methods & one static method.
// call the static method from another class having main method.
abstract class abs {
    abstract void method();
    abstract void method1();
    static void method3(){
        System.out.println("static in absrtact");
    }
}
public class prg7 extends abs {

    @Override
    void method() {
        System.out.println("method implementation in prg7");
    }

    @Override
    void method1() {
        System.out.println("method1 implementation in prg7");
    }

}
