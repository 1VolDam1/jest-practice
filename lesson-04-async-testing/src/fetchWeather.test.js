import { fetchWeather } from "./fetchWeather.js";

// Напишите здесь три асинхронных теста (см. README.md):
//   1) успех — мок client.get через mockResolvedValue, await + resolves;
//   2) ошибка сети — mockRejectedValue + rejects.toThrow;
//   3) валидация — пустой город бросает ошибку, client.get не вызывается.
//
// Пример каркаса теста:
// test("возвращает строку с температурой", async () => {
//   const client = { get: jest.fn().mockResolvedValue({ temp: 21 }) };
//   await expect(fetchWeather(client, "Москва")).resolves.toBe("Москва: 21°C");
// });

test.todo("fetchWeather: успех — возвращает строку с температурой");
test.todo("fetchWeather: пробрасывает ошибку сети (rejects)");
test.todo("fetchWeather: пустой город → ошибка, запрос не уходит");
