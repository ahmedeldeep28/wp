self.addEventListener("push", () => {
    self.reqistration.sendNotification("test message", {})
})