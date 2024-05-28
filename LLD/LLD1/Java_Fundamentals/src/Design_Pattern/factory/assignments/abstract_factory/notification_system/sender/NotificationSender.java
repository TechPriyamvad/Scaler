package Design_Pattern.factory.assignments.abstract_factory.notification_system.sender;

import Design_Pattern.factory.assignments.abstract_factory.notification_system.NotificationType;
import Design_Pattern.factory.assignments.abstract_factory.notification_system.notification.Notification;

public abstract class NotificationSender {
    private final Notification notification;

    public NotificationSender(Notification notification) {
        this.notification = notification;
    }

    public Notification getNotification() {
        return notification;
    }

    public abstract void send();

    public abstract NotificationType notificationType();
}
