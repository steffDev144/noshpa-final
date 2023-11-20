'use strict';


// Elements
const tabsContent = document.querySelectorAll(".tabs__content"), 
      tabBtns = document.querySelectorAll(".tabs__tab");

// Functions
const changeActiveElement = (num) => tabsContent.forEach((elem, i) => i == num ? elem.style.display = "block" : elem.style.display = "none");
changeActiveElement(0);

tabBtns.forEach(item => {
    item.addEventListener("click", () => changeActiveElement(item.getAttribute("data-age")))
});


// Calculator

const calcBlockWrap = document.querySelectorAll(".calc__test_block_wrap"),
      resultBtn = document.querySelector(".calc__result"),
      calcResItem = document.querySelectorAll(".calc__res_item");

calcResItem.forEach(item => item.style.display = "none");
    

// const deleteClassItem = (item, className) => item.classList.remove(className);

function main(element = calcBlockWrap) {
    element.forEach((item, i) => {
        let calcTestItem = item.querySelectorAll(".calc__test_item");
    
        calcTestItem.forEach(item => item.classList.remove("calc__test_item-active"));
    
        calcTestItem.forEach(item => {
            item.addEventListener("click", (e) => {
                calcTestItem.forEach(item => item.classList.remove("calc__test_item-active"));
                item.classList.add("calc__test_item-active")
            });
        });
    
    });
} 
main();


resultBtn.addEventListener("click", function() {
    const itemNums = document.querySelectorAll(".calc__test_item");
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let bigCount = false;
    let bigCount1 = false;

    itemNums.forEach(item => {
        if(item.classList.contains("calc__test_item-active")) {
            if(Number(item.getAttribute("data-calc")) == 1) {
                countA++;
            }
            if(Number(item.getAttribute("data-calc")) == 2) {
                countB++;
            }
            if(Number(item.getAttribute("data-calc")) == 3) {
                countC++;
            }
        }
        
    });
    calcResItem.forEach(item => item.style.display = "none");



    if(countA > countB && countA > countC) {
        calcResItem[0].style.display = "flex"
    }
    if(countA == countB && countA > countC) {
        bigCount = true;
        calcResItem[0].style.display = "flex"
    }
    if(countA > countB && countA == countC) {
        if(!bigCount1) {
            calcResItem[0].style.display = "flex"
        }
    }



    if(countB > countA && countB > countC) {
        calcResItem[1].style.display = "flex"
    }
    if(countB == countA && countB > countC) {
        if(!bigCount) {
            calcResItem[1].style.display = "flex"
        }
    }
    if(countB > countA && countB == countC) {
        bigCount1 = true;
        calcResItem[1].style.display = "flex"
    }



    if(countC > countA && countC > countB) {
        calcResItem[2].style.display = "flex"
    }
    if(countC == countA && countC > countB) {
        if(!bigCount) {
            calcResItem[2].style.display = "flex"
        }
    }
    if(countC > countA && countC == countB) {
        if(!bigCount1) {
            calcResItem[2].style.display = "flex"
        }
    }

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