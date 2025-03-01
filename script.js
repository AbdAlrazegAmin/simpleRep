// تهيئة Telegram Web App
Telegram.WebApp.ready();

// الحصول على عناصر DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// تهيئة MainButton
const mainButton = Telegram.WebApp.MainButton;
mainButton.setText('إضافة');
mainButton.show();
mainButton.onClick(() => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

// دالة إضافة مهمة
function addTask(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.style.display = 'flex';
    listItem.style.justifyContent = 'space-between';
    taskList.appendChild(listItem);

    // إضافة زر حذف
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'حذف';
    deleteButton.style.backgroundColor = '#f44336';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.borderRadius = '5px';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);
}
