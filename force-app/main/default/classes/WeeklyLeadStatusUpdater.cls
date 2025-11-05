public class WeeklyLeadStatusUpdater implements Schedulable {
    public void execute(SchedulableContext sc) {
        // Query Leads not modified in the last 7 days and not Closed
        List<Lead> leadsToUpdate = [
            SELECT Id, Status
            FROM Lead
            WHERE LastModifiedDate <= :System.now().addDays(-7)
            AND Status != 'Closed'
        ];

        // Update Status to "Follow-Up Needed"
        for (Lead lead : leadsToUpdate) {
            lead.Status = 'Follow-Up Needed';
        }

        if (!leadsToUpdate.isEmpty()) {
            update leadsToUpdate;
        }
    }
}