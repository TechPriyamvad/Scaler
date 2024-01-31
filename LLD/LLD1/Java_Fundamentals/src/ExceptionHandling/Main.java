package ExceptionHandling;

public class Main {
    public static void main(String[] args) throws RemainderCannotBeZero,ClassNotFoundException,CloneNotSupportedException {
        DivideByZero dbz = new DivideByZero();
        try
        {
            dbz.divide(4,2);
            dbz.findStudentByRollNo(1);
            System.out.println("Divide By Zero");
//            System.out.println("Db closed");
        }
        catch(RemainderCannotBeZero ex){
            System.out.println(ex);
//            System.out.println("db closed");
            throw new CloneNotSupportedException();
        }
        catch(Exception ex){
            System.out.println(ex);
//            System.out.println("db closed");
        }
        finally {
            System.out.println("db closed");
        }

        dbz.factorial(5);
        System.out.println("Something went wrong");
    }
}
