public class MathExceptionExample {
    public static void runExample(){
        try{
            Integer a = 10;
            Integer b = 0;
            Integer result = a/b; // Division by Zero - MathException
        }catch(MathException e){
            System.debug('MathException: '+e.getMEssage());
        }
    }
}