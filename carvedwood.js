


function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
 }

 function anahiLaoshi() {

    var textoposta = "老 (古老)  (老小) .考 者..故 是 足 聽..找 我 你 他 (其 ) 我們 在 地 也 (你如果不去，我也不去) 世 .. 平 干 千 牛 羊 手 年 车 毛 非 美 肉 .. 功 工 ( 㠭 ) 力 刀  加 九 風 (风) 为 (無為) (无为). 可 句 (金句) 何 行  付. 們 (们) (我們 ) 悶  (闷)  聞 (下士聞道，大笑之)  間 (间)  (人間 ) 問 (问) 門 (门). 同 向 回 . 只 (可心 ) .. 金 全 生 主 王 玉 正. 失 矢 朱 元 光 分 先 无 ( 無 ). 去 法 來 (来) 俠夾 .. 天  (天主) (白天 ) ( 天黑了) 未來 末 禾 (五禾) 夫 木 米 本 大 太 (太热了). 火 小 少 省 (為 無) 人 入 (肏) .. 巡 迷 住 往 .. 地 仙 山 出 . 木 火 土 金 水 永 .. 心 必 悲 惡 恶 思 忠 息 恩 想 .. 五 四 西 (覀) 酉. 醒不來 星 ... 雨 而 (生而不有) . 曲 典 . 真 其 首 自 (自上而下 ) (不自見故明) (己) 耳 目 見 . 田 由 用. 再 里 . 看不見 有  (不無) . 白 日 曰 . 月 开 朋 明 的 之 . 早 百 . 中 口 ... 個 (个) . 下 (天下) 不 . 上 土 士 . 在 正 止 ... 無 因為 無為 . 魚 馬 点 (點) ... 匆 勿 吻 忽 ... 学 安 完 欠 . 了 子 女 ..  花 歹 死 夕 (天) . 多 外 (外国人) 名 各 . 和 知 如 奸 妖 始 要 .. 因 固 国 支 古 故 姑 .."

    var arrposta = textoposta.split("")

    arrposta = arrposta.map( e => e == "." ? "<br>" : e)

    document.getElementById("t").innerHTML = linkear(arrposta);

}



var qu = getQueryVariable("tete")

if ( qu == "unsam") {

    anahiLaoshi()
} else if (qu) {
    elegirCapitulo(qu);
}
