import sortHeroesByHealth from '../src/healthSorter.js';

describe('sortHeroesByHealth', () => {
  test('сортирует массив героев по уровню здоровья', () => {
    const characters = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(characters)).toEqual(expected); // Используем toEqual
  });

  test('выбрасывает ошибку, если аргумент не является массивом', () => {
    expect(() => sortHeroesByHealth(null)).toThrow(TypeError);
    expect(() => sortHeroesByHealth('string')).toThrow(TypeError);
    expect(() => sortHeroesByHealth(123)).toThrow(TypeError);
  });
});