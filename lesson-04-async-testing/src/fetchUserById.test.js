import { fetchUserById } from "./fetchUserById.js";

test("fetchUserById: возвращает пользователя по id (resolves.toEqual)", async () => {
  await expect(fetchUserById(1)).resolves.toEqual({ id: 1, name: "Аня" });
});

test("fetchUserById: несуществующий id → отклонение (rejects.toThrow)", async () => {
  expect.assertions(1);
  await expect(fetchUserById(999)).rejects.toThrow("Пользователь не найден");
});