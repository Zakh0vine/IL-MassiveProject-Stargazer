import { faker } from "@faker-js/faker";
export function createRandomUser() {
  return {
    drug: faker.person.firstName(),
    brand: faker.internet.domainName(),
    stock: faker.number.int(200),
    catatan: faker.lorem.sentence(5),
    status: faker.helpers.arrayElement(["low", "mid", "full"]),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});
