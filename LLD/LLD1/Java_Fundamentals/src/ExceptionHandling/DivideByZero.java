package ExceptionHandling;

public class DivideByZero{
    public int divide(int a,int b) throws RemainderCannotBeZero{
        if(b == 0)
            throw new RemainderCannotBeZero();
        return a/b;
    }

    public void findStudentByRollNo(int b) throws ClassNotFoundException{
        if(b <= 0)
            throw new ClassNotFoundException();
        return;
    }

    public int factorial(int n){
        return n * factorial(n-1);
    }
}
