package Day_3;

public class BitWiseEvenCheck {
    public static void main(String[] args) {
        int num = 4;
        if ((num & 1) == 0){
            System.out.println("Even");
        }else{
            System.out.println("Odd");
        }
    }
}
