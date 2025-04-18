/**
 * Сортирует массив героев по уровню здоровья (от большего к меньшему).
 *
 * @param {Array<Object>} characters - Массив объектов персонажей.
 * @returns {Array<Object>} Отсортированный массив персонажей.
 */
export default function sortHeroesByHealth(characters) {
    if (!Array.isArray(characters)) {
      throw new TypeError('Аргумент должен быть массивом');
    }
  
    return [...characters].sort((a, b) => b.health - a.health); // Сортировка по убыванию здоровья
  }