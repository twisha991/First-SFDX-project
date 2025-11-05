trigger MultipleTriggers on Contact (before insert,before update) {
    //System.debug('LeadTriggr called!');
    for(Contact ContactRecord: Trigger.new){
        if(String.isBlank(ContactRecord.LeadSource)){
            ContactRecord.LeadSource = 'Web';
        }
        // Vlidation on Industry field
        
    }
    System.debug('Lead Trigger 2 is executing!');
}