
package Day_2.HomeWork;
import java.util.Scanner;

public class Grading {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your grade (0-100): ");
        int grade = sc.nextInt();
        
        if (grade < 0 || grade > 100) {
            System.out.println("Please enter a valid number between 0 and 100.");
        } else {
            if (grade > 90) {
                System.out.println("A");
            } else if (grade > 80) {
                System.out.println("B");
            } else if (grade > 70) {
                System.out.println("C");
            } else if (grade > 60) {
                System.out.println("D");
            } else if (grade > 50) {
                System.out.println("E");
            } else {
                System.out.println("Fail");
            }
        }
        sc.close();
    }
}
