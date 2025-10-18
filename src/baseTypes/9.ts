/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type MyType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close"
  details?: Record<'createAt' | 'updateAt', Date>
}

const page1: MyType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: MyType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};