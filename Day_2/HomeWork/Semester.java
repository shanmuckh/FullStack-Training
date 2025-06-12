package Day_2.HomeWork;
import java.util.Scanner;

public class Semester {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter your Semester number (1-8): ");
            int sem = sc.nextInt();
            
            switch(sem) {
                case 1:
                    System.out.println("1st year - 1st sem");
                    break;
                case 2:
                    System.out.println("1st year - 2nd sem");
                    break;
                case 3:
                    System.out.println("2nd year - 1st sem");
                    break;
                case 4:
                    System.out.println("2nd year - 2nd sem");
                    break;
                case 5:
                    System.out.println("3rd year - 1st sem");
                    break;
                case 6:
                    System.out.println("3rd year - 2nd sem");
                    break;
                case 7:
                    System.out.println("4th year - 1st sem");
                    break;
                case 8:
                    System.out.println("4th year - 2nd sem");
                    break;
                default:
                    System.out.println("Invalid semester number. Please enter a value between 1 and 8.");
            }
        }
    }
}
