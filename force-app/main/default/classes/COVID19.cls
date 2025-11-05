public class COVID19 {
public Integer recoveredInArea;
    static Integer recoveredInCountry=0;
    public COVID19(){
        recoveredInArea=0;
    }
    public COVID19(Integer initialVal){
        recoveredInArea=initialVal;
        recoveredInCountry += initialVal;
    
    }
    public void treatPatient(){
        recoveredInArea++;
        recoveredInCountry++;
    }
    public static Integer getRecoveredInCountry(){
        return COVID19.recoveredInCountry;
    }
    }