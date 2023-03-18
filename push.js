var push = require("web-push");

let vapidkeys = {
    publicKey: 'BAl592r2R7jQn0iOxMlq4T_FGVQ4zrcia2s1k1IkieiwpsxUeKe2_QmsAjuxXf6eqBYmVa1VxRPExEZ8yC2zgVs',
    privateKey: 'Ohc3J0djCFU8LW1r2Q2l5YCXblkx6wuHgU6I-E60e6U'
}
push.setVapidDetails("a7medeldeep28@gmail.com", vapidkeys.publicKey, vapidkeys.privateKey)
let sub = {}
push.sendNotification(sub, "test message")