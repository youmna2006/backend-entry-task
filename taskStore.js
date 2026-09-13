class TaskStore {
    constructor() {
        this.tasks = [];
        this.Id = 1;
    }

    add(title, priority, ownerId) {
        //add code

        if (title === "") {
            throw new Error("please enter the title");
        }

        if (priority < 1 || priority > 3) {
            throw new Error("The limited of Priority is 1, 2, or 3");
        }

        const task = {
            id: this.Id,
            title: title,
            status: "todo",
            priority: priority,
            ownerId: ownerId
        };

        this.tasks.push(task);
        this.Id++;

        return task;
    }
    /*first point in the task
const store=new TaskStore;
console.log( store.add("owners",4,18));*/
     //find code
    findById(id){
    return this.tasks.find(task=>task.id===id);}
/*first&second point in the task
const store=new TaskStore();
const task1= store.add("owners",3,5);
const task2= store.add("student",2,7);
const task3= store.add("student",1,4);
const task4= store.add("student",3,9);
const task5= store.add("student",2,6);
console.log(task1);
console.log(task2);
console.log(store.findById(1));
console.log(store.findById(2));
console.log(store.findById(10));*/

 

//update code هندور وبعدين لو موجود نغير
update(id, changes) {
    const task = this.findById(id);

    if (!task) {
        return undefined;
    }

    if (changes.title !== undefined) {
        task.title = changes.title;
    }

    if (changes.status !== undefined) {
        task.status = changes.status;
    }

    if (changes.priority !== undefined) {
        task.priority = changes.priority;
    }

    if (changes.ownerId !== undefined) {
        task.ownerId = changes.ownerId;
    }

    return task;
}






/* check the point three update
const store = new TaskStore();

const task1 = store.add("owners", 3, 7);

console.log("Before update:");
console.log(task1);

store.update(1, {
    title: " update Studying",
    priority: 2 ,
    status:doing   //undefined
});

console.log("After update:");
console.log(store.findById(1));*/
 // البحث عنه ثم حذفه او عدم وجوده
remove(id) {
    const task = this.findById(id);

    if (!task) {
        return false;
    }

    this.tasks = this.tasks.filter(task => task.id !== id);

    return true;
}





/*التحقق من عمليه الحذف النقطه الرابعه
const store = new TaskStore();

store.add("owners", 3, 7);

console.log(store.remove(1));
console.log(store.findById(1));

console.log(store.remove(10)); /// 
true
undefined عشان خلاص ال id1 اتحذف بالفعل
false*/

//list filters(status,ownerid,priority)
list(filter = {}) {
    let result = this.tasks;

    if (filter.status !== undefined) {
        result = result.filter(task => task.status === filter.status);
    }

    if (filter.ownerId !== undefined) {
        result = result.filter(task => task.ownerId === filter.ownerId);
    }

    result = result.sort((a, b) => b.priority - a.priority);

    return [...result];
}



/* التحقق من ان الترتيب صحيح
const store = new TaskStore();

store.add("Task 1", 1, 7);
store.add("Task 2", 3, 7);
store.add("Task 3", 2, 8);

console.log(store.list());
console.log(store.list({ status: "todo" }));
console.log(store.list({ ownerId: 7 }));

النتيجه
{ id: 2, title: 'Task 2', status: 'todo', priority: 3, ownerId: 7 },
  { id: 3, title: 'Task 3', status: 'todo', priority: 2, ownerId: 8 },
  { id: 1, title: 'Task 1', status: 'todo', priority: 1, ownerId: 7 }
   */


countByStatus() {
    return {
        todo: this.tasks.filter(task => task.status === "todo").length,
        doing: this.tasks.filter(task => task.status === "doing").length,
        done: this.tasks.filter(task => task.status === "done").length
    };
}

/* 
const store = new TaskStore();

store.add("Task 1", 1, 7);
store.add("Task 2", 2, 7);
store.add("Task 3", 3, 8);

store.update(2, { status: "doing" });
store.update(3, { status: "done" });

console.log(store.countByStatus());
{ todo: 1, doing: 1, done: 1 } النتيجه*/

}

https://jsonplaceholder.typicode.com/todos?userId=