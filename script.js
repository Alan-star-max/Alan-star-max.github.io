function openBook() {
  document.getElementById('book-closed').style.display = 'none';
  document.getElementById('book-opened').style.display = 'block';
}

function toggleIndex() {
  const index = document.getElementById('index');
  if (index.style.display === 'none') {
    index.style.display = 'block';
  } else {
    index.style.display = 'none';
  }
}

function goToChapter(chapterNumber) {
  const title = document.getElementById('chapter-title');
  const text = document.getElementById('chapter-text');

  if (chapterNumber === 1) {
    title.textContent = "Capítulo 1";
    text.textContent = "Fragmento de la historia capítulo 1...";
  } else if (chapterNumber === 2) {
    title.textContent = "Capítulo 2";
    text.textContent = "Fragmento de la historia capítulo 2...";
  } else if (chapterNumber === 3) {
    title.textContent = "Capítulo 3";
    text.textContent = "Fragmento de la historia capítulo 3...";
  }

  toggleIndex();
}
