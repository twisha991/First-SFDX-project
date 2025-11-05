trigger MultipleTriggers2 on Lead (before insert, before update, before delete,
    after insert, after update, after delete, after undelete) {
        if (Trigger.isExecuting) {
        System.debug('Trigger is executing in a valid context.');
    }

}