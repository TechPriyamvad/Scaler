package Design_Pattern.factory.assignments.abstract_factory.notification_system.notification;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.NotificationType;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.NotificationTemplate;

public class PushNotification extends Notification {
    public PushNotification(String recipient, NotificationTemplate template) {
        super(recipient, template);
    }

    public void sendNotification() {
        // Logic to send a push notification
        System.out.println("Push notification sent to device " + getRecipient());
        System.out.println("Message: " + getTemplate().getMessage());
    }

    public NotificationType notificationType() {
        return NotificationType.PUSH;
    }
}

