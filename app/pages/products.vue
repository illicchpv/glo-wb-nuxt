<template>

  <header class="container header px-4 px-md-0">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-2 col-6">
        <NuxtLink  to="/" class="logo-link">
          <img width="128" src="/images/logo.svg" alt="logo: Willberries" class="logo-image">
        </NuxtLink >
      </div>
      <div class="col-lg-6 d-none d-lg-block">
        <nav>
          <ul class="navigation d-flex justify-content-around">
            <li class="navigation-item">
              <a href="#" class="navigation-link" data-field="gender">Womens</a>
            </li>
            <li class="navigation-item">
              <a href="#" class="navigation-link" data-field="gender">Mens</a>
            </li>
            <li class="navigation-item">
              <a href="#" class="navigation-link" data-field="category">Clothing</a>
            </li>
            <li class="navigation-item">
              <a href="#" class="navigation-link" data-field="category">Accessories</a>
            </li>
            <li class="navigation-item">
              <a href="#" class="navigation-link" data-field="category">Shoes</a>
            </li>
            <li class="navigation-item">
              <a href="#" class="navigation-link">All</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-2 d-none d-lg-block">
        <div class="form-control search-block">
          <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
            aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">
            <img src="/images/search.png" alt="search">
          </button>
        </div>
      </div>
      <div class="col-lg-2 col-6 d-flex justify-content-end">
        <button class="button button-cart">
          <img class="button-icon" src="/images/cart.svg" alt="icon: cart">
          <span class="button-text">Cart</span>
          <span class="button-text cart-count"></span>
        </button>
      </div>
    </div>
    <!-- /.row -->
  </header>

  <section class="long-goods d-block">
    <div class="container">
      <div class="row align-items-center mb-4">
        <div class="col-12">
          <h2 class="section-title">Category</h2>
        </div>
        <!-- /.col-12 -->
      </div>
      <div class="row long-goods-list">
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">Embroidered Hoodie</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Yellow/Lilac/Fuchsia/Orange</p>
            <!-- /.goods-description -->
            <!-- /.goods-price -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$89</span>
            </button>
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
            <h3 class="goods-title">Faded Beach Trousers</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Navy/Ochre/Black/Khaki</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$139</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-121.jpg" alt="image: Text T-Shirt" class="goods-image">
            <h3 class="goods-title">Text T-Shirt</h3>
            <!-- /.goods-title -->
            <p class="goods-description">White</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$59</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-122.jpg" alt="image: Striped Long Sleeve Shirt" class="goods-image">
            <h3 class="goods-title">Striped Long Sleeve Shirt</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Red/Sky Blue</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="001">
              <span class="button-price">$119</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">Embroidered Hoodie</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Yellow/Lilac/Fuchsia/Orange</p>
            <!-- /.goods-description -->
            <!-- /.goods-price -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$89</span>
            </button>
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
            <h3 class="goods-title">Faded Beach Trousers</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Navy/Ochre/Black/Khaki</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$139</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-121.jpg" alt="image: Text T-Shirt" class="goods-image">
            <h3 class="goods-title">Text T-Shirt</h3>
            <!-- /.goods-title -->
            <p class="goods-description">White</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$59</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-122.jpg" alt="image: Striped Long Sleeve Shirt" class="goods-image">
            <h3 class="goods-title">Striped Long Sleeve Shirt</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Red/Sky Blue</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="001">
              <span class="button-price">$119</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">Embroidered Hoodie</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Yellow/Lilac/Fuchsia/Orange</p>
            <!-- /.goods-description -->
            <!-- /.goods-price -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$89</span>
            </button>
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
            <h3 class="goods-title">Faded Beach Trousers</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Navy/Ochre/Black/Khaki</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$139</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-121.jpg" alt="image: Text T-Shirt" class="goods-image">
            <h3 class="goods-title">Text T-Shirt</h3>
            <!-- /.goods-title -->
            <p class="goods-description">White</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$59</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <!-- /.label --><img src="/images/image-122.jpg" alt="image: Striped Long Sleeve Shirt" class="goods-image">
            <h3 class="goods-title">Striped Long Sleeve Shirt</h3>
            <!-- /.goods-title -->
            <p class="goods-description">Red/Sky Blue</p>
            <!-- /.goods-description -->
            <button class="button goods-card-btn add-to-cart" data-id="001">
              <span class="button-price">$119</span>
            </button>
            <!-- /.goods-price -->
          </div>
          <!-- /.goods-card -->
        </div>
        <!-- /.col-3 -->
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 mb-4 mb-xl-0">
          <nav>
            <ul class="footer-menu d-sm-flex">
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Shop</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">About Us</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Careers</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">FAQ </a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Blog</a></li>
              <li class="footer-menu-item"><a href="#" class="footer-menu-link">Contacts</a></li>
            </ul>
          </nav>
        </div>
        <!-- /.col-7 -->
        <div class="col-lg-3 d-flex align-items-center">
          <span class="footer-text">Follow Us</span>
          <span class="footer-social d-inline-flex align-items-center">
            <a href="#" class="social-link">
              <img src="/images/Facebook.svg" alt="Facebook">
            </a>
            <a href="#" class="social-link">
              <img src="/images/Twitter.svg" alt="Twitter">
            </a>
            <a href="#" class="social-link">
              <img src="/images/Instagram.svg" alt="Instagram">
            </a>
          </span>
        </div>
        <!-- /.col-3 -->
        <div class="col-xl-2 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0">
          <span class="footer-text">© 2019 Universal UI Kit</span>
        </div>
        <!-- /.col-2 -->
      </div>
      <!-- /.row -->
      <hr class="footer-line mt-4 mb-4">
      <div class="row justify-content-between">
        <div class="col-lg-4 col-sm-9">
          <img class="payment-logo" src="/images/visa.png" alt="visa logo">
          <img class="payment-logo" src="/images/master-card.png" alt="master card logo">
          <img class="payment-logo" src="/images/paypal.png" alt="paypal logo ">
          <img class="payment-logo" src="/images/bitcoin.png" alt="bitcoin logo">
        </div>
        <!-- /.col-4 -->
        <div class="col-lg-2 col-sm-1 d-flex justify-content-end">
          <a href="#body" class="scroll-link top-link d-flex align-items-center">
            <span class="top-link-text">Top</span>
            <img src="/images/top.svg" alt="icon: arrow top">
          </a>
        </div>
        <!-- /.col-2 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>

</template>