function filterProjects(category, button) {
    // ค้นหาโปรเจกต์ทั้งหมด
    const projects = document.querySelectorAll('.experience-card');

    // แสดงหรือซ่อนโปรเจกต์ตามหมวดหมู่
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'flex'; // แสดงโปรเจกต์
        } else {
            project.style.display = 'none'; // ซ่อนโปรเจกต์
        }
    });

    // กำจัดคลาส active จากปุ่มทั้งหมด
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
    button.classList.add('active');
}