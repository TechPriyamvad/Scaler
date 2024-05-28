package Design_Pattern.factory.assignments.abstract_factory.notification_system.notification;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.NotificationType;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.template.NotificationTemplate;

public abstract class Notification {
    private String recipient;
    private NotificationTemplate template;

    public Notification(String recipient, NotificationTemplate template) {
        this.recipient = recipient;
        this.template = template;
    }

    public String getRecipient() {
        return recipient;
    }

    public NotificationTemplate getTemplate() {
        return template;
    }

    public abstract NotificationType notificationType();

    public abstract void sendNotification();
}
