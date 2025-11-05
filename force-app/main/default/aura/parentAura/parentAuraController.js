({
    messageHandler : function(component, event, helper) {
        component.set('v.message', event.getParam('detail'));
    }
})