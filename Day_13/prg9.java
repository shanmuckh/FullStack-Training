public class prg9 {
    String name;
    int id;
    String Group;
    float marks;
    char grade;

    public prg9(String name, int id, String Group, float marks, char grade) {
        this.name = name;
        this.id = id;
        this.Group = Group;
        this.marks = marks;
        this.grade = grade;
    }

    public String getName() {
        return name;

    }

    public String setName(String name) {
        this.name = name;
        return name;

    }

    public int getid() {
        return id;
    }

    public int setid(int id) {
        this.id = id;
        return id;

    }

    public String getGroup() {
        return Group;
    }

    public String setGroup(String Group) {
        this.Group = Group;
        return Group;
    }

    public float getmarks() {
        return marks;

    }

    public float setmarks(float marks) {
        this.marks = marks;
        return marks;
    }

    public char getgrade() {
        return grade;
    }

    public char setgrade(char grade) {
        this.grade = grade;
        return grade;

    }

    public static void main(String[] args) {
        prg9 s1 = new prg9("bhargav", 101, "A", 89.5f, 'A');
        System.out.println("Name: " + s1.getName());
        System.out.println("ID: " + s1.getid());
        System.out.println("Group: " + s1.getGroup());
        System.out.println("Marks: " + s1.getmarks());
        System.out.println("Grade: " + s1.getgrade());

    }

}