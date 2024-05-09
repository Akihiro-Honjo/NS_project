// 日付
document.getElementById("today").innerHTML = today();
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
window.onload = function() {
    document.getElementsByName("jistutanka1")[0].addEventListener('input', calculateMargin);
    document.getElementsByName("tokune1")[0].addEventListener('input', calculateMargin);
};

function calculateMargin() {
    let sellingPrice = document.getElementsByName("jistutanka1")[0].value;
    let costPrice = document.getElementsByName("tokune1")[0].value;

    // 入力がある場合のみ計算を実行
    if (sellingPrice && costPrice) {
        let margin = ((sellingPrice - costPrice) / sellingPrice) * 100;
        document.getElementById("margin1").innerText = margin.toFixed(2) + "%";
    } else {
        document.getElementById("margin1").innerText = "0%";
    }
}
