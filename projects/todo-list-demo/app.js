// GSD Worker Execution: Todo Logic
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Carrega o estado inicial
let tasks = JSON.parse(localStorage.getItem('gsd_demo_todos')) || [
    { text: "Explicar Context Rot", completed: true },
    { text: "Apresentar a Orquestração GSD", completed: false }
];

function saveTasks() {
    localStorage.setItem('gsd_demo_todos', JSON.stringify(tasks));
}

function renderTasks() {
    list.innerHTML = '';
    
    if(tasks.length === 0) {
        list.innerHTML = `<p class="text-center text-slate-500 py-4 text-sm">Nenhuma tarefa atômica pendente.</p>`;
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `flex items-center justify-between p-4 rounded-xl border ${task.completed ? 'bg-emerald-900/10 border-emerald-500/20' : 'bg-slate-800/30 border-slate-700/50'} transition-all hover:border-slate-600/50`;
        
        li.innerHTML = `
            <div class="flex items-center gap-4 cursor-pointer" onclick="toggleTask(${index})">
                <div class="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed ? 'border-emerald-500 bg-emerald-500/20' : 'border-slate-600'}">
                    ${task.completed ? '<svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
                </div>
                <span class="text-base ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'} transition-colors">${task.text}</span>
            </div>
            <button onclick="deleteTask(${index})" class="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all" title="Remover Tarefa">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
            </button>
        `;
        list.appendChild(li);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() === '') return;
    
    tasks.push({ text: input.value, completed: false });
    input.value = '';
    saveTasks();
    renderTasks();
});

window.toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
};

window.deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
};

// Start
renderTasks();
