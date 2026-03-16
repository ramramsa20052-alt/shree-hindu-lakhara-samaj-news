document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', function () {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
    });
});
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    });
});
