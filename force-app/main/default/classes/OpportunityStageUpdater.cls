public class OpportunityStageUpdater implements Queueable {
    public void execute(QueueableContext context) {
        // Query Opportunities in "Prospecting" stage older than 30 days
        List<Opportunity> oppsToUpdate = [
            SELECT Id, StageName
            FROM Opportunity
            WHERE StageName = 'Prospecting'
            AND CreatedDate <= :System.today().addDays(-30)
        ];

        // Update Stage to "Qualification"
        for (Opportunity opp : oppsToUpdate) {
            opp.StageName = 'Qualification';
        }

        if (!oppsToUpdate.isEmpty()) {
            update oppsToUpdate;
        }
    }
}