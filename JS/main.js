document.getElementById('btn-es').addEventListener('click', function () {
    document.getElementById('content-es').style.display = 'block';
    document.getElementById('content-en').style.display = 'none';
});

document.getElementById('btn-en').addEventListener('click', function () {
    document.getElementById('content-es').style.display = 'none';
    document.getElementById('content-en').style.display = 'block';
});