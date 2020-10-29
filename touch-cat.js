var cat;

while (true) {
    if (textContains("去喂猫 赚更多喵币").findOne(100))
        textContains("去喂猫 赚更多喵币").findOne().click();
    cat = textContains("我的猫，点击撸猫").findOne(500);
    if (!cat) {
        toastLog("end");
        break;
    }
    cat.click();
    var rnd = Math.floor(random() * 50) - 25;
    sleep(75 + rnd);
}