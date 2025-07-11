package Day_3;

import java.util.Scanner;
public class AutoMobiles {
    static class Vehicle {
        String color;
        String landType;
        String fuelType;

        Vehicle(String color, String landType, String fuelType) {
            this.color = color;
            this.landType = landType;
            this.fuelType = fuelType;
        }

        void displayInfo() {
            System.out.println("Color: " + color);
            System.out.println("Land Type: " + landType);
            System.out.println("Fuel Type: " + fuelType);
        }
    }

    static class TwoWheeler extends Vehicle {
        TwoWheeler(String color, String landType, String fuelType) {
            super(color, landType, fuelType);
        }
    }

    static class ThreeWheeler extends Vehicle {
        ThreeWheeler(String color, String landType, String fuelType) {
            super(color, landType, fuelType);
        }
    }

    static class Ship extends Vehicle {
        Ship(String color, String landType, String fuelType) {
            super(color, landType, fuelType);
        }
    }

    static class Aeroplane extends Vehicle {
        Aeroplane(String color, String landType, String fuelType) {
            super(color, landType, fuelType);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter vehicle type (2 for TwoWheeler, 3 for ThreeWheeler, 4 for Ship, 5 for Aeroplane): ");
        int type = sc.nextInt();
        sc.nextLine(); // consume newline

        System.out.print("Enter color: ");
        String color = sc.nextLine();
        System.out.print("Enter land type: ");
        String landType = sc.nextLine();
        System.out.print("Enter fuel type: ");
        String fuelType = sc.nextLine();

        Vehicle vehicle;
        switch (type) {
            case 2:
                vehicle = new TwoWheeler(color, landType, fuelType);
                break;
            case 3:
                vehicle = new ThreeWheeler(color, landType, fuelType);
                break;
            case 4:
                vehicle = new Ship(color, landType, fuelType);
                break;
            case 5:
                vehicle = new Aeroplane(color, landType, fuelType);
                break;
            default:
                System.out.println("Invalid type selected.");
                sc.close();
                return;
        }

        System.out.println("Vehicle Details:");
        vehicle.displayInfo();
        sc.close();
    }
}
