function changeImages(src, caption) {

    document.getElementById('start').src = src;
    document.getElementById('display').getElementsByTagName('p')[0].innerText = caption;
    }

