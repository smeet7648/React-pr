import "../App.css";

function Header() {
    return (
        <header class="header">
            <div class="st1">
                <div class="f1">
                    <p class="p1">SHOPPING CENTER <span class="change">for all orders over $100</span></p>
                </div>
                <div class="f2">
                    <a href="0"><p class="p2">Store Location | </p></a>
                    <a href="0"><p class="p3">Track Your Order |</p></a>
                    <select name="" id="" class="select1">
                        <option value="Usd">USD</option>
                        <option value="Euro">EURO</option>
                        <option value="Gbp">GBP</option>
                    </select>
                    <select name="" id="" class="select1">
                        <option value="English">English</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                    </select>
                </div>
            </div>
            <div class="nav">
                <div class="logo">
                    <h1 class="title">Mart<span class="change1">Fury</span></h1>
                    <div class="logo1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNEBO2OUKQjP-RSbIZae3jIq76g3rMrn9vQ&s" alt="" class="img1" />
                        <div class="open">
                            <div class="opul1">
                                <a href="0" class="apa1">
                                    <img src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-vector-star-icon-png-image_1577370.jpg" alt="" class="opmg1" id="fix1" />
                                    <p class="opli1">Hot Promotion</p>
                                </a>
                                <a href="0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/75/75258.png" alt="" class="opmg1" />
                                    <p class="opli1">Consumer Electronic</p>
                                </a>
                                <a href="0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4305/4305423.png" alt="" class="opmg1" />
                                    <p class="opli1">Clothing & Apparel</p>
                                </a>
                                <a href="0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/66/66050.png" alt="" class="opmg1" />
                                    <p class="opli1">Home, Garden & Kitchen</p>
                                </a>
                                <a href="0">
                                    <img src="data:image/png;base64,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" alt="" class="opmg1" />
                                    <p class="opli1">Health & Beauty</p>
                                </a>
                                <a href="0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/636/636600.png" alt="" class="opmg1" />
                                    <p class="opli1">Yelwerly & Watches</p>
                                </a>
                                <a href="0">
                                    <img src="https://www.iconpacks.net/icons/1/free-computer-icon-956-thumb.png" alt="" class="opmg1" />
                                    <p class="opli1">Computer & Technology</p>
                                </a>
                                <a href="0">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f-EK67JQEoRBg6rBbuwaQVGpAJrUAQmP8g&s" alt="" class="opmg1" />
                                    <p class="opli1">Babies & Moms</p>
                                </a>
                                <a href="0">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWG6CZqZvOOmDtP5TEN2coGEMeImaoOwPLA&s" alt="" class="opmg1" />
                                    <p class="opli1">Sports & Outdoors</p>
                                </a>
                                <a href="0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" alt="" class="opmg1" />
                                    <p class="opli1">Phones & Accessories</p>
                                </a>
                                <a href="0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="" class="opmg1" />
                                    <p class="opli1">Books & Office</p>
                                </a>
                                <a href="0">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XuZJTgcNKv5L9sNijob1v5A03-5IwmjjCA&s" alt="" class="opmg1" />
                                    <p class="opli1">Cars & Motocycles</p>
                                </a>
                                <a href="0">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuF4Z-FtvEn0KFN11kmFjDzx1dvpy0uu0hOQ&s" alt="" class="opmg1" />
                                    <p class="opli1">Home Improments</p>
                                </a>
                                <a href="0">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GLLy87AtDzMdy2zognPHmrrhSEiaqtoOEA&s" alt="" class="opmg1" />
                                    <p class="opli1">Vouchers & Services</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inp1">
                    <select name="" id="" class="select2">
                        <option value="All">All</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Books">Books</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Sports">Sports</option>
                        <option value="Toys">Toys</option>
                        <option value="Home">Home</option>
                        <option value="Garden">Garden</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Health">Health</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Pet">Pet</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Music">Music</option>
                        <option value="Video Games">Video Games</option>
                        <option value="Office Supplies">Office Supplies</option>
                        <option value="Baby">Baby</option>
                        <option value="Arts">Arts</option>
                        <option value="Crafts">Crafts</option>
                        <option value="Tools">Tools</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Appliances">Appliances</option>
                    </select>
                    <input type="text" class="search" name="" id="" placeholder="Search Products ..." />
                    <button class="btn1">Search</button>
                </div>
                <div class="acc1">
                    <img class="icon1" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="" />
                    <img class="icon2" src="https://img.freepik.com/premium-vector/vector-design-cart-bag-icon-style_822882-170391.jpg" alt="" />
                    <img class="icon3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8e1XkIN5Pa8yiLlgHusqgqpfL2WCXLO6XA&s" alt="" />
                    <a href="0"><p class="p4">Login</p></a>
                    <a href="0"><p class="p5">Register</p></a>
                </div>
            </div>
            <div class="nav2">
                <a href="0">
                    <p class="p6">HOT DEALS</p>
                </a>
                <a href="0">
                    <p class="p7">SMARTPHONES</p>
                </a>
                <a href="0">
                    <p class="p8">TABLETS</p>
                </a>
                <a href="0">
                    <p class="p9">LAPTOPS</p>
                </a>
                <a href="0">
                    <p class="p10">SOUND</p>
                </a>
                <a href="0">
                    <p class="p11">TECHNOLOGY TOYS</p>
                </a>
                <a href="0">
                    <p class="p12">ACCESORIES</p>
                </a>
            </div>
        </header>
    );
}

export default Header;