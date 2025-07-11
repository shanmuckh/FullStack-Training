package Day_4;

import java.util.Scanner;

public abstract class Account {
    String accountNumber;
    private double balance;
    String name;
    String mobNum;
    long aadharNum;
    String pancardNo;
    double minbal;

    public Account(String accountNumber, double initialBalance, String name, double minbal, String mobNum,
            long aadharNum, String pancardNo) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.name = name;
        this.mobNum = mobNum;
        this.aadharNum = aadharNum;
        this.pancardNo = pancardNo;
        this.minbal = minbal;
    }

    public abstract double withdraw(double amount);

    public double deposit(double amount) {
        balance += amount;
        return balance;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public static void diaplayAccount() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the account type:");
        System.out.println("1. Savings Account");
        System.out.println("2. Current Account");
        System.out.println("3. Fixed Deposit Account");
        System.out.println("4. Recurring Deposit Account");
        System.out.println("5. Loan Account");
        System.out.print("Please select an account type (1-5): ");

        int accountType = sc.nextInt();
        switch (accountType) {
            case 1:
                System.out.println("You have selected Savings Account.");

                break;
            case 2:
                System.out.println("You have selected Current Account.");

                break;
            case 3:
                System.out.println("You have selected Fixed Deposit Account.");

                break;
            case 4:

                System.out.println("You have selected Recurring Deposit Account.");

                break;
            case 5:
                System.out.println("You have selected Loan Account.");

                break;

            default:
                System.out.println("Invalid account type selected.");
                System.out.println("Please select a valid account type.");
                break;
        }
        sc.close();
    }

    public static void main(String[] args) {

        diaplayAccount();
        Account savingsAccount = new SavingsAccount("123456789", 5000, "John Doe", 1000, "9876543210", 123456789012L,
                "ABCDE1234F");

        System.out.println("Initial Balance: " + savingsAccount.getBalance());
        savingsAccount.withdraw(2000);
        System.out.println("Balance after withdrawal: " + savingsAccount.getBalance());
        savingsAccount.deposit(1500);
        System.out.println("Balance after deposit: " + savingsAccount.getBalance());

    }

    public static class SavingsAccount extends Account {

        public SavingsAccount(String accountNumber, double initialBalance, String name, double minbal, String mobNum,
                long aadharNum, String pancardNo) {
            super(accountNumber, initialBalance, name, minbal, mobNum, aadharNum, pancardNo);
        }

        @Override
        public double withdraw(double amount) {
            if (getBalance() - amount >= minbal) {
                setBalance(getBalance() - amount);
                System.out.println("Withdrawn: " + amount);
            } else {
                System.out.println("Insufficient balance. Minimum balance must be maintained.");
            }
            return getBalance();
        }
    }
}