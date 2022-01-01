const app = getApp();
Page({
    data: {
        list: []
    },
    onLoad() {
        let list = [];
        for(let i = 1; i< 15; i++) {
            let url = i  < 10 ? '0' + (i) : i;
            list.push('https://cos.color-ui.com/wallpaper/10' + url + '.jpg');
        }
        this.setData({
            list: list
        })
    }
})
