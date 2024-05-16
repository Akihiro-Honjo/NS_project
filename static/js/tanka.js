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
// $(function() {
//     $('input[name="jistutanka1"], input[name="tokune1"]').on('input', calculateMargin1);
// });

// function calculateMargin1() {
//     let sellingPrice1 = $('input[name="jistutanka1"]').val();
//     let costPrice1 = $('input[name="tokune1"]').val();

//     // 入力がある場合のみ計算を実行
//     if (sellingPrice1 && costPrice1) {
//         let margin1 = ((sellingPrice1 - costPrice1) / sellingPrice1) * 100;
//         $('#margin1').text(margin1.toFixed(2) + "%");
//     } else {
//         $('#margin1').text("0%");
//     }
// }

// $(function() {
//     $('input[name="jistutanka2"], input[name="tokune2"]').on('input', calculateMargin2);
// });

// function calculateMargin2() {
//     let sellingPrice2 = $('input[name="jistutanka2"]').val();
//     let costPrice2 = $('input[name="tokune2"]').val();

//     // 入力がある場合のみ計算を実行
//     if (sellingPrice2 && costPrice2) {
//         let margin2 = ((sellingPrice2 - costPrice2) / sellingPrice2) * 100;
//         $('#margin2').text(margin2.toFixed(2) + "%");
//     } else {
//         $('#margin2').text("0%");
//     }
// }

$(function() {
    setupMarginCalculation('jistutanka1', 'tokune1', 'margin1');
    setupMarginCalculation('jistutanka2', 'tokune2', 'margin2');
    setupMarginCalculation('jistutanka3', 'tokune3', 'margin3');
});

function setupMarginCalculation(sellingInputName, costInputName, marginDisplayId) {
    $('input[name="' + sellingInputName + '"], input[name="' + costInputName + '"]').on('input', function() {
        calculateMargin(sellingInputName, costInputName, marginDisplayId);
    });
}

function calculateMargin(sellingInputName, costInputName, marginDisplayId) {
    let sellingPrice = $('input[name="' + sellingInputName + '"]').val();
    let costPrice = $('input[name="' + costInputName + '"]').val();

    // 入力がある場合のみ計算を実行
    if (sellingPrice && costPrice) {
        let margin = ((sellingPrice - costPrice) / sellingPrice) * 100;
        $('#' + marginDisplayId).text(margin.toFixed(2) + "%");
    } else {
        $('#' + marginDisplayId).text("0%");
    }
}
