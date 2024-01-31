package Generics;

public class Assignment_coding_question1 {
    private int x;
    private int y;

    public Assignment_coding_question1(int num1,int num2){
        this.x = num1;
        this.y = num2;
    }

    public boolean equals(Object obj){
        if(this == obj){
            return true;
        }
        else if(obj==null || getClass() != obj.getClass()){
            return false;
        }
        Assignment_coding_question1 a = (Assignment_coding_question1)obj;
        return (this.x==a.x)&&(this.y==a.y);
    }

    public int hashCode(){
        int result = 31;
        result = result * 19 + x;
        result = result * 19 + y;
        return result;
    }
}
