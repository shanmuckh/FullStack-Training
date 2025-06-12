package Day_3;

public class MaxOfThree {
    public static void main(String[] args) {
        int a = 15, b = 25, c = 10;
        int max;
        if (a > b && a > c){
            max = a;
        } else if(b > a && b >c){
            max = b;
        }else{
            max = c;
        }
        System.out.println("MaxOfThree : " + max);
    }
}
