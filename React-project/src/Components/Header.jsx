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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNEBO2OUKQjP-RSbIZae3jIq76g3rMrn9vQ&s" alt="" class="img1" />
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