document.querySelectorAll('.exercise-toggle').forEach(button => {
// ابحث عن كل أزرار التمارين في الصفحة

    button.addEventListener('click', () => {
    // عند الضغط على أي زر

        const details = button.nextElementSibling;
        // details = العنصر الذي يلي الزر مباشرة وهو قسم التفاصيل

        details.classList.toggle('open');
        // أضف أو احذف كلاس open لإظهار أو إخفاء التفاصيل

        button.textContent = details.classList.contains('open')
            ? button.textContent.replace('▼', '▲')
            : button.textContent.replace('▲', '▼');
        // غيّر السهم من ▼ إلى ▲ عند الفتح والعكس عند الإغلاق
    });
});