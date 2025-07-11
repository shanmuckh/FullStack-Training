package Day_3;
public class CalculateArea{
    public static int area (int length,int breadth){
        return length * breadth;
    } 
    public static void main(String[] args) {
        int length = 10, breadth =5;
        int area = length * breadth;
        int perimeter = 2*(length * breadth);
        System.out.println("Area: " + area);
        System.out.println("Perimeter: " + perimeter);
    }
}