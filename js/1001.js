(function () {
    let p = new ReaderParam()
    let bookNum = 1001
    p.bookIndex = bookNum
    p.bookTitle = '逃离长空篇'
    p.bookDate = '2015'
    p.bookDesc = {
        zh: '紧接着《崩坏学园2》的游戏剧情，2014年，在长空市中，发生了强烈的崩坏。琪亚娜，雷电芽衣，布洛妮娅三个少女在逃离长空市的过程中，遇到了天命组织的女武神，无量塔姬子...'
    }
    p.editorNote = {
        zh: '- 本篇为主线漫画（原《崩坏3rd》系列漫画）的第一作，为游戏1.0版本的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Bs411U7SU">漫画宣传PV</a>　<a href="https://www.bilibili.com/video/BV1Ws411t734">公测PV</a>　<a href="https://www.bilibili.com/video/BV14s411r7Rh">开场CG</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1gs411r7QX">布洛妮娅角色PV：萝莉就是正义嘛！</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1zs411t7ma">芽衣角色PV：雷电女王降临！</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1ss411t7tt">琪亚娜角色PV：Kiana出击！</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1001.jpg'
    p.numChapter = 7
    p.chTitles = [
        '序章 琪亚娜·出击',
        '第一话 崩坏、爆发',
        '第二话 雷鸣的魔女',
        '第三话 女武神出阵',
        '第四话 女王VS女王',
        '第五话 隙间',
        '第六话 新的旅程',
    ]
    p.chPages = [
        29, 27, 22, 19, 18, 19, 21
    ]
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
    p.hiddenPages = {
        1: {
            20: hiddenSrcPrefix + '0002/0021.jpg',
        },
        4: {
            3: [
                hiddenSrcPrefix + '0005/0003.jpg',
                hiddenSrcPrefix + '0005/0004.jpg',
            ]
        },
        5: {
            9: hiddenSrcPrefix + '0006/0010.jpg',
            19: hiddenSrcPrefix + '0006/0021.jpg',
        },
    }
    p.bgmInfo = [
        [[-1, 33, 34], [0, 1, 21]],
        [[35, 36], [0, 66]],
        [[37, 39, 38], [0, 36, 56]],
        [[40, 29], [0, 45]],
        [[29, 6], [0, 73]],
        [[43, 41, 43], [0, 27, 60]],
        [[63, 99], [0, 83]],
    ]
    p.addBgmLoopInfo(99, 1, 25.2, 2, 3, false)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
