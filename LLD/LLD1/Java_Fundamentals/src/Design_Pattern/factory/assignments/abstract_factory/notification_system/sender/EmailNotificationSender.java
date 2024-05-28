package Design_Pattern.factory.assignments.abstract_factory.notification_system.sender;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.NotificationType;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.Notification;

public class EmailNotificationSender extends NotificationSender{
    public EmailNotificationSender(Notification notification) {
        super(notification);
    }

    @Override
    public void send() {
        System.out.println("Sending Email notification to " + getNotification().getRecipient());
    }

    @Override
    public NotificationType notificationType() {
        return NotificationType.EMAIL;
    }
}
