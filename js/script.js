// js/script.js

// รอให้ HTML โหลดเสร็จสมบูรณ์ก่อน ค่อยเริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {

    console.log("JavaScript is loaded and running!");

    // ดึง Element ต่างๆ จาก HTML มาใช้งาน
    const heading = document.getElementById('main-heading');
    const button = document.getElementById('action-button');

    let clickCount = 0;

    // สร้าง Event Listener เมื่อปุ่มถูกคลิก
    button.addEventListener('click', () => {
        clickCount++;
        heading.textContent = `คุณกดปุ่มไปแล้ว ${clickCount} ครั้ง!`;
        console.log("Button was clicked!");
    });

});