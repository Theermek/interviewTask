"use strict";
/*
Задание 1
Создать абстрактный класс “AClass”
у которого будет свойство “Numbers” типа Array, который содержит n натуральных чисел.
метод “fill”, который заполняет массив Numbers случайными числами;
метод “factorial”, который возвращает массив факториалов из массива Numbers;
абстрактный метод “sort”.
Конструктор принимает один параметр “n” и вызываетметод “fill”. Метод “fill” можно вызывать только из методов класса “AClass”.

Метод “factorial” может вызываться из класса AClass и из дочерних классов.
Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который
сортирует массив Numbers, а затем выдает массив факториалов. Алгоритм
сортировки в классах “Class1” и “Class2” должен различаться.
*/

/*
Задание 2
Таблица Students имеет поля StudentId, FirstName, LastName, Group и содержит
информацию о студентах института. Таблица Exams имеет поля StudentId,
ExamName, Result и содержит результаты экзаменов студентов.
a) написать SQL запрос, который выводит имена и фамилии студентов у которых
больше двух экзаменов с результатом меньше 3.
b) написать SQL запрос, который выводит название групп,
в которых таких студентов больше 10
*/

const MAX_ARRAY_VALUE = 10;


class AClass {
    constructor(n) {
        this._Numbers = [];
        this.#fill(n);
    }

    /**
     * #fill Заполняет внутренний массив _Numbers рандомными числами в кол-ве n
     * @param n необходимый размер массива
     */
    #fill(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random() * MAX_ARRAY_VALUE));
        }
        this._Numbers = arr;
    }

    /**
     * _factorial Возвращает массив факториалов из чисел массива _Numbers.
     * !!! _Numbers должен быть уже отсортирован !!!
     * Сортировка сохраняется
     * @return facArray массив факториалов
     */
    _factorial() {
        let facArray = [];

        for (let i = 0; i < this._Numbers.length; i++) {
            let currNum = this._Numbers[i];
            if (currNum === 0 || currNum === 1) {
                facArray.push(1);
                continue;
            }
            if (i === 0) {
                let fac = 1;
                for (let j = 2; j <= currNum; j++) {
                    fac *= j;
                }
                facArray.push(fac);
                continue;
            }
            let prevNum = this._Numbers[i - 1];
            if (currNum === prevNum) {
                facArray.push(facArray[i - 1]);
            } else {
                let fac = facArray[i - 1];
                for (let j = prevNum + 1; j <= currNum; j++) {
                    fac *= j;
                }
                facArray.push(fac);
            }
        }
        return facArray;
    }
}

class Class1 extends AClass{
    /**
     * Реализация алгоритма сортировка выбором
     */
    sort() {
        let arrayLen = this._Numbers.length;
        for (let i = 0; i < arrayLen-1; i++) {
            let min = i;
            for (let j = i+1; j < arrayLen; j++) {
                if (this._Numbers[j] < this._Numbers[min]) {min = j;
                }
            }
            let t = this._Numbers[min];
            this._Numbers[min] = this._Numbers[i];
            this._Numbers[i] = t;
        }
        return this._factorial();
    }
}

class Class2 extends AClass{
    /**
     * Реализация алгоритма сортировка вставками
     */
    sort() {
        let arrayLen = this._Numbers.length;
        for (let i = 0; i < arrayLen; i++) {
            let currValue = this._Numbers[i];
            let j = i - 1;
            while (j >= 0 && this._Numbers[j] > currValue) {
                this._Numbers[j + 1] = this._Numbers[j];
                j--;
            }
            this._Numbers[j + 1] = currValue;
        }
        return this._factorial();
    }
}

/* Uncomment to test script in browser */
let firstClass = new Class1(8);
console.log(firstClass._Numbers);
console.log(firstClass._factorial());
console.log(firstClass.sort());

let secondClass = new Class2(8);
console.log(secondClass._Numbers);
console.log(secondClass._factorial());
console.log(secondClass.sort());