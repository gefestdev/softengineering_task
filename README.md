# Задания на практику Софт Инжиниринг ```Junior```

## Мануал для установки
1.Для начала нам потребуется установить [Git](https://git-scm.com/)(если он не установлен).

2.Открываем терминал в нужном нам месте(куда мы хотим установить папку с программой) и вводим команду ```git clone https://github.com/gefestdev/softengineering_task.git```

После этого Git склонирует к вам на ПК папку с программой.
____
## :white_check_mark:Задача 1
Написать консольное приложение, которое выводит фамилию и имя пользователя с ```id 10```, данные взять из публичного API

 Чтобы запустить программу, достаточно открыть ```index.html``` через любой современный браузер (в моем случае Firefox), после чего нажать ```F12```, чтобы открылся инструмент разработчика и в нем перейти в консоль.

![изображение](https://user-images.githubusercontent.com/56268426/196036051-18427abe-9c8e-44c8-8e79-00a45234d0df.png)

![изображение](https://user-images.githubusercontent.com/56268426/196036074-1e5ed5b0-13bf-4446-96f6-fcad8a0730d6.png)

## :white_check_mark:Задача 2
Необходимо сгруппировать сотрудников по отделу из представленного ```JSON```. 
В каждый отдел необходимо добавить поле ```count```, содержащее количество сотрудников в отделе
В каждый отдел необходимо добавить поле ```avg_hours```, содержащее среднюю выработку сотрудников по отделу
Если у сотрудника отсутствует поле ```hours```, то такого сотрудника необходимо исключить из подсчета средней выработки
Округление до целого по правилам математики
Поле dept необходимо убрать (значение полей dept должны стать ключами выходного json)
Вывести сотрудников сгруппированных по отделу

## Входной JSON:

```json
[
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 1",
    "phone": "89999999999"
  },
  {
    "dept": "Отдел АСУ",
    "name": "Сотрудник 2",
    "phone": "88888888888"
  },
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 3",
    "hours": 165,
    "phone": "87777777777"
  },
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 4",
    "hours": 132,
    "phone": "86666666666"
  },
  {
    "dept": "Отдел АСУ",
    "name": "Сотрудник 5",
    "hours": 101,
    "phone": "85555555555"
  },
  {
    "dept": "Отдел информационных систем",
    "name": "Сотрудник 6",
    "hours": 98,
    "phone": "84444444444"
  }
]
```
## Результат выполнения:

![изображение](https://user-images.githubusercontent.com/56268426/196039947-73265ba5-e24b-49f6-bbdb-a1fcbc41c5a0.png)
