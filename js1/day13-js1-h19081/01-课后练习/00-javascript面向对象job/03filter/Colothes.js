

function getClothes(length) {

    function Clothe(id,brand,color,price,size) {
        this.id=id;
        this.brand=brand;
        this.color=color;
        this.price=price;
        this.size=size;
    }

    var clothes=[];

    //1,创建100个产品
    for(var i=0;i<length;i++){
        //(1)获得颜色
        var coloe = getColor();
        //(2)获得品牌
        var brand = getBrand();
        //(3)价格
        var price = getPrice(99,500);
        //(4)尺寸
        var size = getSize();
        var clothe = new Clothe(i,brand,coloe,price,size);
        clothes.push(clothe);
    }

    return clothes;
}

//按照规则获得颜色
function getColor() {
    var colors=['白色','黑色','灰色','蓝色','绿色','军绿色','银色','黄色'];
    //(1)获得颜色
    var color="";
    var random = Math.floor(Math.random()*15);
    if(random<=4){
        color=colors[1];
    }else if(random>4&&random<8){
        color=colors[0];
    }else{
        var index = Math.floor(Math.random()*(colors.length-2))+2;
        color=colors[index];
    }
    return color;
}

function getBrand() {
    var brands=['安踏','361','特步','红星尔特','耐克','阿迪达斯','李玲'];
    var index=  Math.floor(Math.random()*brands.length);
    return brands[index];
}

function getPrice(start,end) {

    var price = Math.floor(Math.random()*(end-start));

    return price;
}

function getSize() {

    var size = Math.floor(Math.random()*3);

    return size;
}
