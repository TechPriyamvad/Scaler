package introToOops;

public class Students {
    public String name;
    int phoneNumber;
    private int age;
    protected double psp;
    String batchName = "A";
    public String mentorName;
    Students(String name,int age,double psp){
        this.name = name;
        this.age = age;
        this.psp = psp;
    }

    void changeBatch(String newBatchName){
        batchName = newBatchName;
    }

    void giveMockInterview(){
        System.out.println(name+"Giving Mock Interview");
    }

    int getAge(){
        return age;
    }

    void setAge(int new_age){
        age = new_age;
    }
}
