({
    doInit: function (component, event, helper) {
        const pubsubBridge = component.find('pubsubBridge');
        pubsubBridge.registerEvent('messageEvent', function (payload) {
            component.set('v.message', payload.message);
        });
    }
})