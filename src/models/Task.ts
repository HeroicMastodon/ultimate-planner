export default class Task {
	public Id?: string;
    public Details = '';
    
    public Repeats = false;
    public LastCompletionDate = '';
    public ListName = '';

    public IsDeleted = false;

    public CompletionDate?: string;

	constructor(
		public Name: string,
		public Completed = false,
		public parentId?: string,
		public Children: Array<Task> = [],
		public DueDate: string = ''
	) {}

	get HasChildren(): boolean {
		return this.Children.length > 0;
	}

	get HasParent(): boolean {
		return !!this.parentId;
	}
}

// TODO: Mimic Google Tasks functionality
//      Name
//      Details 
//      List Name
//      Due Date
//      Subtasks if not a sub task
//      Repeat

// export const TestTasks: Array<Task> = [
//     new Task('Scripture Study', false, [], 'Today'),
//     new Task('Johnson brothers timberline wood'),
//     new Task('Shopping', false, [
//         new Task('Pillow'),
//         new Task('Clean Car'),
//         new Task('Whitening Strip', false, [
//             new Task('test')
//         ]),
//         new Task('Wood glue')
//     ]),
//     new Task('steel wool'),
//     new Task('Oil'),
//     new Task('3mhisjobs.com'),
//     new Task('Game'),
//     new Task('a practical guide to evil')
// ]

// export const TestCompleted: Array<Task> = [
//     new Task('Duct Tape', true),
//     new Task('Leather Conditioner', true)
// ]
