public class SystemMonitor implements ILogger {
    public void log(String msg) {
        System.debug('SystemMonitor logging: ' + msg);
    }
}