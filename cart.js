let bot1 = document.getElementById('bot1');

bot1.addEventListener('click',()=>{
    document.getElementById('luong1').innerHTML = parseInt(document.getElementById('luong1').innerHTML) - 1;
    let dongia1 = document.getElementById('dongia1').innerHTML;    
    let tong1 = document.getElementById('tonggia1').innerHTML;
    let tongsau = (parseInt(tong1.substring(1,tong1.length)) - parseInt(dongia1.substring(1,dongia1.length)) );

    document.getElementById('tonggia1').innerHTML = '$' + tongsau;
    document.getElementById('TongGiaSP').innerHTML = '$' + (parseInt(document.getElementById('tonggia1').innerHTML.substring(1,document.getElementById('tonggia1').innerHTML.length)) + parseInt(document.getElementById('tonggia2').innerHTML.substring(1,document.getElementById('tonggia2').innerHTML.length)))
})

let them1 = document.getElementById('them1');
them1.addEventListener('click',()=>{
    document.getElementById('luong1').innerHTML = parseInt(document.getElementById('luong1').innerHTML) + 1;
    let dongia1 = document.getElementById('dongia1').innerHTML;    
    let tong1 = document.getElementById('tonggia1').innerHTML;
    let tongsau = (parseInt(tong1.substring(1,tong1.length)) + parseInt(dongia1.substring(1,dongia1.length)) );
    
    document.getElementById('tonggia1').innerHTML = '$' + tongsau;
    document.getElementById('TongGiaSP').innerHTML = '$' + (parseInt(document.getElementById('tonggia1').innerHTML.substring(1,document.getElementById('tonggia1').innerHTML.length)) + parseInt(document.getElementById('tonggia2').innerHTML.substring(1,document.getElementById('tonggia2').innerHTML.length)))

})
let bot2 = document.getElementById('bot2');
bot2.addEventListener('click',()=>{
    document.getElementById('luong2').innerHTML = parseInt(document.getElementById('luong2').innerHTML) - 1;
    let dongia2 = document.getElementById('dongia2').innerHTML;    
    let tong2 = document.getElementById('tonggia2').innerHTML;
    let tongsau = (parseInt(tong2.substring(1,tong2.length)) - parseInt(dongia2.substring(1,dongia2.length)) );

    document.getElementById('tonggia2').innerHTML = '$' + tongsau;
    document.getElementById('TongGiaSP').innerHTML = '$' + (parseInt(document.getElementById('tonggia1').innerHTML.substring(1,document.getElementById('tonggia1').innerHTML.length)) + parseInt(document.getElementById('tonggia2').innerHTML.substring(1,document.getElementById('tonggia2').innerHTML.length)))

})

let them2 = document.getElementById('them2');
them2.addEventListener('click',()=>{
    document.getElementById('luong2').innerHTML = parseInt(document.getElementById('luong2').innerHTML) + 1;
    let dongia2 = document.getElementById('dongia2').innerHTML;    
    let tong2 = document.getElementById('tonggia2').innerHTML;
    let tongsau = (parseInt(tong2.substring(1,tong2.length)) + parseInt(dongia2.substring(1,dongia2.length)) );
    
    document.getElementById('tonggia2').innerHTML = '$' + tongsau;
    document.getElementById('TongGiaSP').innerHTML = '$' + (parseInt(document.getElementById('tonggia1').innerHTML.substring(1,document.getElementById('tonggia1').innerHTML.length)) + parseInt(document.getElementById('tonggia2').innerHTML.substring(1,document.getElementById('tonggia2').innerHTML.length)))

})