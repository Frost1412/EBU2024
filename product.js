const apiUrl = 'http://localhost:3000/thu';
let allProducts = [];
let products = [];
async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        const productList = document.getElementById('product-list');
        // console.log(products.books);
        // products = products.books;
        products.forEach(product => {
            console.log(product)
            const productHtml = `
                <div style=" height:max-content;" class="col-sm-3 bg-white p-0 rounded">
                    <div class="p-3">
                        <div><img src="${product.images[0].base_url}" class="rounded" alt=""></div>
                        <div>
                            <h5 class="my-3">Đặc điểm nổi bật</h5>
                            <ul class="p-0 m-0">
                                <li class="d-flex">
                                    <img src="done.png" class="imgmin" alt="">
                                    <p>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng
                                        và bền bỉ.</p>
                                </li>
                                <li class="d-flex">
                                    <img src="done.png" class="imgmin" alt="">
                                    <p>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút
                                        sự chú ý của trẻ em.</p>
                                </li>
                                <li class="d-flex">
                                    <img src="done.png" class="imgmin" alt="">
                                    <p>Cung cấp thông tin tổng quát về diện tích, dân số
                                        và ngôn ngữ của các quốc gia.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="">
                        <div class="d-flex align-content-center p-3 border-top">
                            <img src="rovanbot.png" class="imgmin me-2" alt="">
                            <p class="item_robot mb-0 align-content-center ">Xem thêm <strong>Tóm tắt nội dung
                                    sách</strong></p>
                            <img src="arrow-right-s-line.png" class="imgmin" alt="">
                        </div>
                    </a>
                </div>
                <div class="col-sm p-0">
                    <div class="d-flex flex-column gap-3">
                        <div class="bg-white rounded p-3">
                            <div class="d-flex mb-2">
                                <img src="real.png" class="img_real " alt="">
                                <p class="m-0 pe-1 w-100">Tác giả: <span class="text-primary">Aleksandra Mizielińska,
                                        Daniel
                                        Mizi</span></p>
                            </div>
                            <h4>${product.name.slice(0)}</h4>
                            <div class="d-flex">
                                <p class="me-1 m-0 fs align-content-center">4.8</p>
                                <ul class="list-unstyled  d-flex m-0">
                                    <li style="height: 15px;"><img class="mb-3" src="star.png" alt=""></li>
                                    <li style="height: 15px;"><img class="mb-3" src="star.png" alt=""></li>
                                    <li style="height: 15px;"><img class="mb-3" src="star.png" alt=""></li>
                                    <li style="height: 15px;"><img class="mb-3" src="star.png" alt=""></li>
                                    <li style="height: 15px;"><img class="mb-3" src="star.png" alt=""></li>
                                </ul>
                                <!-- <p class=" align-content-center "></p>
                                (<span class="font-size: 10px;">928</span>)</p> -->
                                <p class="border-start align-content-center fs ps-1 m-0 text-black-50">
                                    Đã bán 5000+</p>
                            </div>
                            <div class="home_product_item_price mt-2 mb-3">
                                <h4 class="me-3 mb-0">257.000<span
                                        style="vertical-align: super; font-size: 20px; text-decoration: underline;">đ</span>
                                </h4>
                                <span>-26%</span>
                            </div>
                            <h5 class="mt-5">Thông tin chi tiết</h5>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td class="text-black-50">Phiên bản sách</td>
                                        <td>Phiên bản thường</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Công ty phát hành</td>
                                        <td>Nhã Nam</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Ngày xuất bản</td>
                                        <td>2020-03-02 00:00:00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Kích thước</td>
                                        <td>27 x 37 cm</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Dịch Giả</td>
                                        <td>QuỳnhChi</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Loại bìa</td>
                                        <td>Bìa cứng</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Số trang</td>
                                        <td>108</td>
                                    </tr>
                                    <tr>
                                        <td class="text-black-50">Nhà xuất bản</td>
                                        <td>Nhà Xuất Bản Lao Động</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="bg-white rounded p-3">
                            <h5 class="pb-2">Mô tả sản phẩm</h5>
                            <img src="map_item.png" alt="">
                            <p class="mt-3">Hãy khám phá thế giới cùng cuốn bản đồ khổng lồ đầu tiên ở Việt Nam! Sách
                                gồm
                                52 tấm bản đồ minh họa sinh động các đặc điểm địa lý và biên giới chính trị, giới
                                thiệu những địa điểm nổi tiếng, những nét đặc trưng, về động vật và thực vật bản
                                địa, về con người địa phương, các sự kiện văn hóa cùng nhiều thông tin hấp dẫn
                                khác.</p>
                            <p class="mt-3">Đến với cuốn Bản đồ khổng lồ (27x37cm) gồm 52 tấm bản đồ đầy màu sắc sống
                                động này, các bạn nhỏ sẽ được thỏa sức khám phá thế giới. Có tất cả 6 tấm bản đồ
                                lục địa và 42 bản đồ quốc gia. Châu u có gì, châu Á nổi tiếng vì điều chi, khí hậu ở
                                châu Phi như thế nào? Tất cả những chi tiết nổi bật của từng vùng miền, từng đất
                                nước, như địa danh, trang phục, ẩm thực, lễ hội tập tục truyền thống, v…v… đều
                                được liệt kê bằng những hình vẽ ngộ nghĩnh đáng yêu. Mỗi bản đồ có thống kê sơ
                                bộ về diện tích, dân số, ngôn ngữ… để các bạn nhỏ nắm được thông tin tổng quát
                                của từng đất nước, châu lục. Mỗi nước đều được phân chia thành các vùng địa lý
                                cụ thể với tên vùng được viết mờ, các thành phố lớn trong từng nước được viết
                                bằng màu đỏ nổi bật với chấm đỏ bên cạnh.</p>
                            <p class="mt-3">Cuốn sách này hứa hẹn sẽ là tấm vé đưa độc giả nhỏ du lịch khắp mọi miền
                                trên thế
                                giới. Các bậc phụ huynh cũng có thể đồng hành cùng con em mình, cùng ngâm cứu
                                từng chi tiết trên mỗi tấm bản đồ, tìm hiểu và bàn luận về các địa phương. Thông
                                qua việc chỉ dẫn, diễn giải cho các con về những thông tin trên bản đồ, đây sẽ là
                                cuốn sách tương tác tốt để bố mẹ kết nối và gần gũi với con mình hơn.</p>
                            <p><strong>CUỐN SÁCH NÀY CÓ GÌ ĐẶC BIỆT?</strong></p>
                            <p class="mt-3">Cuốn sách Bản đồ đã được xuất bản tại hơn 30 quốc gia, bán được hơn 3 triệu
                                bản
                                in, là một trong những cuốn bản đồ ăn khách nhất thế giới. Bản đồ của hai tác giả
                                Aleksandra Mizielińska và Daniel Mizieliński đã giành được nhiều giải thưởng lớn,
                                nổi bật nhất là giải Prix Sorcières của Pháp và giải Premio Andersen của Ý – hai giải
                                thưởng danh giá cho dòng sách thiếu nhi.</p>
                            <p class="mt-3">Các quốc gia đã xuất bản “Bản đồ”: Úc, Áo, Bỉ, Brazil, Canada, Chile, Trung
                                Quốc,
                                Croatia, Séc, Ecuador, Ai Cập, Fiji, Phần Land, Pháp, Đức, Ghana, Hy Lạp, Iceland,
                                Ấn Độ, Ý, Nhật Bản, Jordan, Madagascar, Ma Rốc, Mexico, Mông Cổ, Namibia,
                                Nepal, Hà Lan, New Zealand, Peru, Ba Lan, Nam Phi, Romania, Nga, Tây Ban Nha,
                                Thụy Điển, Thụy Sĩ, Tanzania, Thái Lan, Anh, Mỹ.</p>
                            <p class="mt-3">ĐẶC BIỆT: Phiên bản "Bản đồ" Việt Nam đặc biệt được tác giả vẽ riêng đất
                                nước
                                Việt Nam.</p>
                            <p class="mt-3">Để thực hiện cuốn sách đồ sộ này, hai tác giả trẻ đã phải mất hơn 3 năm
                                trời. Sau
                                khi nghiên cứu và tìm hiểu kỹ lưỡng, họ lập một danh sách các thông tin hấp dẫn và
                                thú vị với trẻ em, chọn lọc ra những chi tiết đặc sắc nhất của mỗi nước để vẽ vào
                                bản đồ. Các tấm bản đồ đều được vẽ theo tỉ lệ chuẩn xác dựa trên các bản đồ địa
                                lý đã được phát hành. Hai tác giả không chỉ vẽ tay tất cả các chi tiết hình ảnh mà
                                còn dày công thiết kế tất cả các phông chữ được dùng trong sách.</p>
                            <p class="mt-3">Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ
                                vào
                                loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác
                                như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng
                                giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 bg-white rounded p-3" style="height: max-content;">
                    <div>
                        <div class="quantity-selector">
                            <label for="quantity">Số Lượng</label>
                            <div class="quantity-controls">
                                <button class="minus text-black-50 border" onclick="decreaseQuantity()">-</button>
                                <input type="number" id="quantity" name="quantity" value="1" min="1" readonly>
                                <button class="plus border" onclick="increaseQuantity()">+</button>
                            </div>
                        </div>
                    </div>
                    <h5 class="m-0 mt-3">Tạm tính</h5>
                    <h4 class="mb-3 mt-2"><span id="total-price">${product.list_price}</span><span
                            style="vertical-align: super; font-size: 20px; text-decoration: underline;">đ</span>
                    </h4>
                    <div id="product" data-price="257000"></div>
                    <div class="d-grid flex-column gap-2">
                        <button style="height: 40px;" type="button" class=" btn btn-danger">Mua ngay</button>
                        <button style="height: 40px;" type="button"
                            class=" button btn btn-white border-primary text-primary" onclick="addToCart()">Thêm vào giỏ
                            hàng</button>
                        <button style="height: 40px;" type="button"
                            class=" button btn btn-white border-primary text-primary">Mua trước khi trả sau</button>
                    </div>
                </div>
            `;

            productList.innerHTML += productHtml;
        });
    } catch (error) {
        // console.error('Error fetching products:', error);
    }
}

fetchAndDisplayProducts();

