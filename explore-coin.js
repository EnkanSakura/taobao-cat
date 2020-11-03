var 去浏览;
var 喵币;
var 全部完成 = false;

sleep(1000);
toastLog("开始");
while (true) {
    去浏览 = textContains("去浏览").findOne(100);
    if (!去浏览) {
        全部完成 = true;
        var 可浏览 = textContains("秒").find();
        for (var i = 0; i < 可浏览.length; i++) {
            去浏览 = 可浏览[i].parent().parent().child(1);
            if (去浏览.text() != "已完成") {
                全部完成 = false;
                break;
            }
        }
    }
    if (全部完成) {
        break;
    }
    var 重试次数 = 0;
    去浏览.click();
    sleep(20000);
    while (!descContains("完成").findOne(100) &&
        !textContains("完成").findOne(100) &&
        !textContains(/[0-9][0-9]000/).findOne(100)) {
        sleep(1000);
        重试次数++;
        if (重试次数 > 5) {
            break;
        }
    }
    重试次数 = 0;
    back();
    sleep(2000);
}
toast("完成");
var 领取奖励 = textContains("领取奖励").find()
for (var i = 0; i < 领取奖励.length; i++) {
    领取奖励[i].click();
    sleep(200);
}