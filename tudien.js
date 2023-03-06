function LeeSin() {

    let a_eng = ['Attractive','Beautiful','Body shape','Charming','Cute'];
    let b_vie = ['Quyến rũ','Xinh đẹp','Vóc dáng','Thu hút','Đáng yêu'];
    let string = document.getElementById("string").value;
    let inter_eng = 0;
    let result = "";

    for (let i = 0;i < a_eng.length;i ++){ // vào vòng lặp khởi tạo biến i chạy đến độ dài cuối của mảng Anh
        if (string == a_eng[i]){// xét đk cho chuỗi bằng mảng i
            inter_eng = i;// gán cho bằng i

        } for (let j = 0;j < b_vie.length;j++){//tạo Vl for khởi tạo biến j chạy đến độ dài mảng Việt
            if (inter_eng == j){// xét điều kiện cho biến bằng với j
                result = b_vie[j];// gán cho rs bằng với mảng j
            } else {result = ""}//nếu không thì không ra kết quả
        }
    }
    document.getElementById("result").innerHTML = result;//chạy và hiểm thị kết quả
}



