# Утмановка:
- скачать проект, выполнить npm i;
- запустить проект: npm run dev;

## Вопрос 1
Чтобы избавиться от переменной that нужно использовать стрелочную функцию 

function parent() {
    const multiplier = 3;
    return [33, 77, 99, 81, 55].map((I) => I * multiplier);
}

## Вопрос 2

Метод preventDefault() используется для отмены действия по умолчанию

отменяется отправка формы при нажатии на кнопку

```const MyForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}```
