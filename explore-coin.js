sleep(1000);
var target_text = "去浏览";
var progress_text = "/20)";
var go_explore;
while (go_explore = textContains(target_text).findOne(100)) {
    var waitTimes = 0;
    go_explore.click();
    sleep(20000);
    while (!descContains("完成").findOne(100) &&
        !textContains("完成").findOne(100) &&
        !textContains(/[0-9]0000/).findOne(100)) {
        sleep(1000);
        waitTimes++;
        if (waitTimes > 5) {
            break;
        }
    }
    waitTimes = 0;
    back();
    sleep(2000);
}
toast("完成");