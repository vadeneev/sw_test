self.addEventListener('push', event => {
    console.log(event);

    var notification = new Notification('ALARMA!', {
        body: 'Notifications are nice',
        tag: 'simple-push-demo-notification',
        //icon: icon
    });
});