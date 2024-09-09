document.getElementById('reserveButton').addEventListener('click', function () {
    var galleryContainer = document.getElementById('roomGallery');

    // 이미 갤러리가 펼쳐져 있다면 숨기기
    if (galleryContainer.style.display === 'block') {
        galleryContainer.style.display = 'none';
    } else {
        galleryContainer.style.display = 'block';

        // 기존 항목 초기화
        galleryContainer.innerHTML = '';

        // 20개의 갤러리 항목을 동적으로 추가
        for (var i = 1; i <= 20; i++) {
            var galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="객실 ${i}">
                <p>객실 ${i} 설명</p>
            `;
            galleryContainer.appendChild(galleryItem);
        }
    }
});
