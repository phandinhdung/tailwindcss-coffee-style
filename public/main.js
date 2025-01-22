
const topMenu = document.getElementById('pdd-top-menu');
const toggleTopMenuIcon = document.getElementById('pdd-toggle-top-menu-icon')

// Phải bắt cả sự kiện bắt bên ngoài, để ẩn đi menu khi click ra ngoài
document.addEventListener('click', (e) => {
  // click icon menu
  if(toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle('hidden'); //hàm toggle(của javascript) sẽ thêm hoặc xóa class hidden trong danh sách class
    topMenu.classList.toggle('pdd-topmenu-expanded');
    
  } else { // click bên ngoài icon menu
    if(topMenu.classList.contains('pdd-topmenu-expanded')) {
      topMenu.classList.remove('pdd-topmenu-expanded');
      topMenu.classList.add('hidden');
    }
  }
});