import { divideAsync } from "./divideAsync.js";

test("divideAsync: делит два числа (resolves / await)", async () => {
  await expect(divideAsync(10, 2)).resolves.toBe(5);
});

test("divideAsync: деление на ноль → промис отклоняется (rejects)", async () => {
  await expect(divideAsync(10, 0)).rejects.toThrow("Деление на ноль");
});