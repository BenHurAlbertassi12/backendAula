class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return { status: 201, data: newCharacter };
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return { status: 200, data: allCharacter };
  }

  /* Implementação dos outros métodos */
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
