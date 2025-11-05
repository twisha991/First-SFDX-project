trigger ContactTrigger on Contact (before insert,before update) {
    //System.debug('LeadTriggr called!');
    for(Contact ContactRecord: Trigger.new){
        if(String.isBlank(ContactRecord.title )){
            ContactRecord.title = 'Associate';
        }
        // Vlidation on Industry field
        if(String.isBlank(ContactRecord.Department)){
            ContactRecord.addError('The Department field cannot be BLANK - Custom Validation!');
        }
    }
}