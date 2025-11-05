trigger TriggerHandlerClass1 on Account (before insert) {
public class AccountTriggerHandler {
    public  void afterInsert(List<Account> newAccounts) {
        List<Task> tasksToInsert = new List<Task>();

        for (Account acc : newAccounts) {
            Task t = new Task();
            t.WhatId = acc.Id;
            
            tasksToInsert.add(t);
        }

        try {
            insert tasksToInsert;
        } catch (DmlException e) {
            System.debug('DML Exception occurred while inserting Tasks: ' + e.getMessage());

        }
    }
}

}