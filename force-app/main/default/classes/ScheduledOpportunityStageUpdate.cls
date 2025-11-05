public class ScheduledOpportunityStageUpdate implements Schedulable {
    public void execute(SchedulableContext sc) {
        System.enqueueJob(new OpportunityStageUpdater());
    }
}