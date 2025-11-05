trigger OpportunityTrigger on Opportunity (before insert) {
    if(trigger.isinsert){
        if(trigger.isbefore){
            for(opportunity opp:trigger.new){
                if(string.isBlank (opp.StageName)){
                    opp.StageName='Qualification';
                }
                
            }
        }
    }

}