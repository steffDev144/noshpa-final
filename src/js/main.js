'use strict';


// Elements
const tabsContent = document.querySelectorAll(".tabs__content"),
    tabBtns = document.querySelectorAll(".tabs__tab"),
    calcRes = document.querySelectorAll(".calc__res"),
    calcGo  = document.querySelector('.calc__go');

// Functions
const changeActiveElement = (num) => tabsContent.forEach((elem, i) => i == num ? elem.style.display = "block" : elem.style.display = "none");
changeActiveElement(0);

tabBtns.forEach(item => {
    item.addEventListener("click", () => changeActiveElement(item.getAttribute("data-age")))
});


// Calculator

const calcBlockWrap = document.querySelectorAll(".calc__test_block_wrap"),
    resultBtn = document.querySelector(".calc__result"),
    calcResItem = document.querySelectorAll(".calc__res_item"),
    calcResReturn = document.querySelectorAll(".calc__res_return"),
    calcResWrap = document.querySelectorAll(".calc__res_item-wrap");

const slides = document.querySelectorAll('.slide');
const btnsSlider = document.querySelectorAll('.calc__test_item');

let currentIndex = 0;
let translate = 0;

calcResWrap.forEach(item => item.style.transform = `translateX(-100%)`);

calcResWrap.forEach(item => item.style.scale = `0`);
calcResItem.forEach(item => item.classList.remove('calc__res_item-active'));
// calcRes.forEach(item => item.style.zIndex = "-100");


// const deleteClassItem = (item, className) => item.classList.remove(className);

function main(element = calcBlockWrap) {
    element.forEach((item, i) => {
        let calcTestItem = item.querySelectorAll(".calc__test_item");

        calcTestItem.forEach(item => item.classList.remove("calc__test_item-active"));

        calcTestItem.forEach(item => {
            item.addEventListener("click", (e) => {
                calcTestItem.forEach(item => item.classList.remove("calc__test_item-active"));
                item.classList.add("calc__test_item-active");
            });
        });

    });
}
main();

let countA;
let countB;
let countC;
resultBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // testBlock.forEach((item, i) => {
    //     item.style.right = "100%";
    // });
    countA = 0;
    countB = 0;
    countC = 0;
    const itemNums = document.querySelectorAll(".calc__test_item");

    let bigCount = false;
    let bigCount1 = false;

    itemNums.forEach(item => {
        if (item.classList.contains("calc__test_item-active")) {
            if (Number(item.getAttribute("data-calc")) == 1) {
                countA++;
            }
            if (Number(item.getAttribute("data-calc")) == 2) {
                countB++;
            }
            if (Number(item.getAttribute("data-calc")) == 3) {
                countC++;
            }
        }

    });
    calcResWrap.forEach(item => item.style.transform = `translateX(-100%)`);
    calcResWrap.forEach(item => item.style.scale = `0`);
    calcResItem.forEach(item => item.classList.remove('calc__res_item-active'));
    // calcRes.forEach(item => item.style.zIndex = "1");



    if (countA > countB && countA > countC) {
        calcResItem[0].style.display = "flex";
        calcResWrap[0].style.scale = `1`;
        calcResItem[0].classList.add("calc__res_item-active");
        calcResWrap[0].style.transform = `translateX(5%)`;
    }
    if (countA == countB && countA > countC) {
        bigCount = true;
        calcResItem[0].style.display = "flex";
        calcResWrap[0].style.scale = `1`;
        calcResItem[0].classList.add("calc__res_item-active");
        calcResWrap[0].style.transform = `translateX(5%)`;
    }
    if (countA > countB && countA == countC) {
        bigCount = true;
        if (!bigCount1) {
            calcResItem[0].style.display = "flex";
            calcResWrap[0].style.scale = `1`;
            calcResItem[0].classList.add("calc__res_item-active");
            calcResWrap[0].style.transform = `translateX(5%)`;
        }
    }



    if (countB > countA && countB > countC) {
            calcResItem[1].style.display = "flex";
            calcResWrap[1].style.scale = `1`;
        calcResItem[1].classList.add("calc__res_item-active");
        calcResWrap[1].style.transform = `translateX(-95%)`;
    }
    if (countB == countA && countB > countC) {
        if (!bigCount) {
            calcResItem[1].style.display = "flex";
            calcResWrap[1].style.scale = `1`;
            calcResItem[1].classList.add("calc__res_item-active");
            calcResWrap[1].style.transform = `translateX(-95%)`;
        }
    }
    if (countB > countA && countB == countC) {
        bigCount1 = true;
            calcResItem[1].style.display = "flex";
            calcResWrap[1].style.scale = `1`;
        calcResItem[1].classList.add("calc__res_item-active");
        calcResWrap[1].style.transform = `translateX(-95%)`;
    }



    if (countC > countA && countC > countB) {
            calcResItem[2].style.display = "flex";
        calcResItem[2].classList.add("calc__res_item-active");
        calcResWrap[2].style.scale = `1`;
        calcResWrap[2].style.transform = `translateX(-196%)`;
    }
    if (countC == countA && countC > countB) {
        if (!bigCount) {
            calcResItem[2].style.display = "flex";
            calcResItem[2].classList.add("calc__res_item-active");
            calcResWrap[2].style.scale = `1`;
            calcResWrap[2].style.transform = `translateX(-196%)`;
        }
    }
    if (countC > countA && countC == countB) {
        if (!bigCount1) {
            calcResItem[2].style.display = "flex";
            calcResItem[2].classList.add("calc__res_item-active");
            calcResWrap[2].style.scale = `1`;
            calcResWrap[2].style.transform = `translateX(-196%)`;
        }
    }

    slides.forEach(slide => {
        slide.classList.remove('slide-active');
        slide.style.scale = `0`;
        slide.style.transform = `translateX(-${(translate)}%)`;
    });
    let count = slides.length - 1;
    if(slides[count]) {
        slides[count].classList.add('slide-active');
        slides[count].style.scale = `1`;
        slides[count].style.transform = `translateX(-500%)`;
    }

    calcGo.style.display = "none";
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            translate = translate + 100;
            slide.classList.add('slide-active');
            slide.style.transform = `translateX(-${translate}%)`;
        } else if (index < currentIndex) {
            slide.classList.remove('slide-active');
            slide.style.transform = `translateX(-${translate * 2}%)`;
        } else {
            slide.classList.remove('slide-active');
            slide.style.transform = `translateX(${translate}%)`;
        }
    });
}

btnsSlider.forEach((item, i) => {
    if (i < (slides.length - 1) * 3 - 3) {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentIndex === slides.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }

            updateSlider();
        });
    } else {
        item.addEventListener('click', (e) => {
            resultBtn.style.display = "block";
            document.querySelector('.calc__res').style.display = 'flex';
        });
    }
});

calcResReturn.forEach(item => {
    item.addEventListener("click", function () {
        countA = 0;
        countB = 0;
        countC = 0;
        calcGo.style.display = "block";

        calcResWrap.forEach(item => item.style.transform = `translateX(-100%)`);
        calcResWrap.forEach(item => item.style.scale = `0`);
        calcResItem.forEach(item => item.classList.remove('calc__res_item-active'));
        document.querySelector('.calc__res').style.display = 'none';

        resultBtn.style.display = "none";
        
        slides.forEach(slide => slide.removeAttribute("style"));
        
        slides.forEach((item, i) => {
            if(i == 0) {
                translate = translate + 100;
                item.classList.add('slide-active');
                currentIndex = 0;
                translate = 0;
                // item.style.transform = `translateX(0)`;
            }
        });
        main();
    });
});