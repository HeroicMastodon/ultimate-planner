export default class Task {
    constructor(public Name: string, public Completed = false, public Children: Array<Task> = [], public DueDate?: string) {}

    get HasChildren(): boolean {
        return this.Children.length > 0;
    }
}

export const TestTasks: Array<Task> = [
    new Task('Scripture Study', false, [], 'Today'),
    new Task('Johnson brothers timberline wood'),
    new Task('Shopping', false, [
        new Task('Pillow'),
        new Task('Clean Car'),
        new Task('Whitening Strip'),
        new Task('Wood glue')
    ]),
    new Task('steel wool'),
    new Task('Oil'),
    new Task('3mhisjobs.com'),
    new Task('Game'),
    new Task('a practical guide to evil')
]