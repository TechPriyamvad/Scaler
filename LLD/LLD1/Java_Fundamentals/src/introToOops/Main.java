package introToOops;

public class Main {
    public static void main(String[] args){
        Students s1 = new Students("A",30,40.00);
        s1.name = "Priyamvad";
        int age = s1.getAge();
        s1.psp = 100;
        s1.setAge(29);
        s1.giveMockInterview();
    }
}
