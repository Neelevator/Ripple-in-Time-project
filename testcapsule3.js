function openTimeCapsulePage() {
    window.location.href = 'timecapsule.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const capsules = document.querySelectorAll('.capsule');

    capsules.forEach(capsule => {
        capsule.addEventListener('click', () => {
            capsule.classList.toggle('greyed-out');
        });
    });
});