// create a java abstract class that implemets an interface having 3 abstract methods. 
//this abstract method should be extended by another class which implements all methods of the abstract class.
interface face {
    void method();
    void method1();
    void method2();
} 
class trial implements face{
    public void method(){
        System.out.println("method");
    }
    public void method1(){
        System.out.println("method1");
    }
    public void method2(){
        System.out.println("method2");
    }
}
public class  prg6 {
    public static void main(String args[]){
        face obj = new trial();
        obj.method();
        obj.method1();
        obj.method2();
    }
    
}
