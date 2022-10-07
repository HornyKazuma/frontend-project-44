### Hexlet tests and linter status:
[![Actions Status](https://github.com/HornyKazuma/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/HornyKazuma/frontend-project-44/actions)
<a href="https://codeclimate.com/github/HornyKazuma/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/9abd26e81718ca662a69/maintainability" /></a>
## Описание проекта:
**«Игры разума»** — это набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга.
## Инструкция по установке и запуску.
1. Клонируем репозиторий с проектом, с помощью команды: `git clone <ssh/url>`.
2. Переходим в директорию с проектом, с помощью комадны: `cd <нужная директория>`.
3. Устанавливаем зависимости проекта, с помощью команды: `make install`.
4. Устанавливаем пакет с играми локально, с помощью команды: `npm link`.
5. Запускаем нужную игру. У каждой игры есть своя команда для запуска.
## Игра: "Проверка на четность"
### Описание игры:
Пользователю показывается случайное число. И ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.
### Запуск игры: `brain-even`<br>
[![asciicast](https://asciinema.org/a/YDlBHq8XQ170zSOrAfNmf8Ikp.svg)](https://asciinema.org/a/YDlBHq8XQ170zSOrAfNmf8Ikp)
## Игра: "Калькулятор"
### Описание игры:
Пользователю показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.
### Запуск: `brain-calc`<br>
[![asciicast](https://asciinema.org/a/knka8cAQ8BGtAVW6vmmzxoWGc.svg)](https://asciinema.org/a/knka8cAQ8BGtAVW6vmmzxoWGc)
## Игра: "НОД"
### Описание игры:
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.
### Запуск: `brain-gcd`<br>
[![asciicast](https://asciinema.org/a/7JG28tdaoPyGx8jNwx1KXd5y5.svg)](https://asciinema.org/a/7JG28tdaoPyGx8jNwx1KXd5y5)
## Игра: "Арифметическая прогрессия"
### Описание игры:
Пользователю показывается ряд чисел, образующий арифметическую прогрессию, случайное число из этого ряда заменятся двумя точками.<br>
Игрок должен определить это число.
### Запуск: `brain-progression`<br>
[![asciicast](https://asciinema.org/a/s2fKeqDRIOAoImxQb57QWbrbg.svg)](https://asciinema.org/a/s2fKeqDRIOAoImxQb57QWbrbg)
# Игра: "Простое ли число?"
### Описание игры:
Пользователю показывается случайное число. И ему нужно ответить **yes**, если число является **простым**, или **no** — если число не является простым.<br>
_Простое число_ — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.<br>
Например, 7 — простое число, потому что делится без остатка только на 1 и на себя.
### Запуск: `brain-prime`<br>
[![asciicast](https://asciinema.org/a/TOHdpQgBEtEU9WWZXu4otYzlG.svg)](https://asciinema.org/a/TOHdpQgBEtEU9WWZXu4otYzlG)
