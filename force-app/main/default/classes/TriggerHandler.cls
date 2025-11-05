public class TriggerHandler {
    public static void afterInsert(List<Account> newAccounts) {
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