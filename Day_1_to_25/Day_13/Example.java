
@FunctionalInterface
interface A{
    void m1();
    static void m2(){
        System.out.println("hello static");
    }
    default void m3(){
        System.out.println("default");
    }
}

public class Example implements A {

    public void m1(){
        System.out.println("abstract");
    }
    public static void main(String[] args){
        Example e = new Example();
        e.m1();
        e.m3();
        A.m2();

    }
    
}
