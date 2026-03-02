const osInfo = navigator.userAgent;
localStorage.setItem('osInfo', osInfo);

const storageInfoDiv = document.getElementById('storage-info');
storageInfoDiv.innerHTML = `<p>OS Info: ${localStorage.getItem('osInfo')}</p>`;

// fetch comments using placeholder service; VARIANT_NUMBER should be set to
// the sequential number from your group journal
const VARIANT_NUMBER = 1; // <-- replace with your actual variant number
fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
    .then(response => response.json())
    .then(comments => {
        const commentsSection = document.getElementById('comments-section');
        comments.forEach(comment => {
            // create an article element to match the look of other articles on the site
            const commentElement = document.createElement('article');
            commentElement.className = 'comment';
            commentElement.innerHTML = `<p>${comment.body}</p>`;
            commentsSection.appendChild(commentElement);
        });
    });

setTimeout(() => {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'block';
}, 60000);

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'none';
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('night');
});

const hour = new Date().getHours();
if (hour < 7 || hour > 21) {
    document.body.classList.add('night');
} else {
    document.body.classList.remove('night');
}