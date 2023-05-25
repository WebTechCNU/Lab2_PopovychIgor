// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');
const consultation = document.querySelector('#consultation');


modalClose.addEventListener('click', function() {
  overlay.style.display = 'none';
  consultation.style.display = 'none';
  
  modalClose.style.display = 'none';
  document.documentElement.style.overflow = '';
});





const products = [
    {
        id: 1,
        title: "Orange",
        price: "5.00$",
        imageUrl: "images/p1.png"
    },
    {
        id: 1,
        title: "Durian",
        price: "2.00$",
        imageUrl: "images/p2.png"
    },
    {
        id: 1,
        title: "Kiwi",
        price: "15.00$",
        imageUrl: "images/p3.png"
    },
    {
        id: 1,
        title: "Mango",
        price: "7.00$",
        imageUrl: "images/p4.png"
    },
    {
        id: 1,
        title: "Banana",
        price: "3.00$",
        imageUrl: "images/p5.png"
    },
    {
        id: 1,
        title: "Apple",
        price: "6.00$",
        imageUrl: "images/p6.png"
    },
]


const injectFruits = () => {
    const container = document.getElementById('products-grid')
    products.forEach(prod => {
        container.innerHTML += `
        <div class="col-sm-6 col-lg-4">
        <div class="box">
          <div class="img-box">
            <img src="${prod.imageUrl}" alt="">
          </div>
          <div class="detail-box">
            <span class="rating">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-half-o" aria-hidden="true"></i>
            </span>
            <a href="">
              ${prod.title}
            </a>
            <div class="price_box">
              <h6 class="price_heading">
                <span>${prod.price}</span> 
              </h6>
            </div>
          </div>
        </div>
      </div>
        `
    })
}

injectFruits();


setTimeout(function() {
  const overlay = document.querySelector('.overlay');
  const consultation = document.querySelector('#consultation');

  overlay.style.display = 'block';
  consultation.style.display = 'block';
  document.documentElement.style.overflow = 'hidden';

  setTimeout(function() {
    
    modalClose.style.visibility = 'visible';
  }, 3000);
}, 3000);

setInterval(function() {
  const overlay = document.querySelector('.overlay');
  const consultation = document.querySelector('#consultation');

  overlay.style.display = 'block';
  consultation.style.display = 'block';
  document.documentElement.style.overflow = 'hidden';

  setTimeout(function() {
    
    modalClose.style.display = 'block';
  }, 3000);
}, 100000);





// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();




