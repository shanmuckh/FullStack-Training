package Day_2;
import java.util.Scanner;
public class CheckVotingAge{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your age:");
        int inputAge = sc.nextInt();
        if (inputAge >= 18){
            System.out.println("u can vote");
        }
        else{
            System.out.println("u cannot vote");
        }
        sc.close();
    }
}