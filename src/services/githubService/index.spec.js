import { getRepositoryByUsername } from '.';

const makeSut = async username => {
  const { data } = await getRepositoryByUsername(username);
  return {
    name: data.name,
    avatarUrl: data.avatar_url,
    bio: data.bio,
  };
};

describe('getRepositoryByUsername', () => {
  it('getRepositoryByUsername should be instance of function', () => {
    expect(getRepositoryByUsername).toBeInstanceOf(Function);
  });

  it('should be able to receive an param and return repository', async () => {
    expect(makeSut('hbleao')).toBeInstanceOf(Object);
  });
});
