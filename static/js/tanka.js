// 日付
$(function() {
    $('#today').text(today());
});

function today() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();
    const today = year + "年" + month + "月" + date + "日";
    return today;
}


//   粗利率計算
$(function() {
    $('input[name="jistutanka1"], input[name="tokune1"]').on('input', calculateMargin);
});

function calculateMargin() {
    let sellingPrice = $('input[name="jistutanka1"]').val();
    let costPrice = $('input[name="tokune1"]').val();

    // 入力がある場合のみ計算を実行
    if (sellingPrice && costPrice) {
        let margin = ((sellingPrice - costPrice) / sellingPrice) * 100;
        $('#margin1').text(margin.toFixed(2) + "%");
    } else {
        $('#margin1').text("0%");
    }
}