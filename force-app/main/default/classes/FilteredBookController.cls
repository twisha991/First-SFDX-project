public class FilteredBookController {
  public List<Book__c> Books{ get; set;}
      
      public FilteredBookController(){
           Books = [SELECT Name, Genre__c FROM Book__c WHERE Quantity__c >=5];
      }
}