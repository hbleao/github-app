import { api } from '../api';

export const getRepositoryByUsername = async username => {
  const githubProfile = await api.get(`${username}`);

  if (githubProfile.status !== 200) return {};

  return {
    id: githubProfile.data.id,
    name: githubProfile.data.name,
    login: githubProfile.data.login,
    bio: githubProfile.data.bio,
    avatarUrl: githubProfile.data.avatar_url,
    email: githubProfile.data.email,
    followers: githubProfile.data.followers,
    following: githubProfile.data.following,
    publicRepos: githubProfile.data.public_repos,
  };
};

export const getRepositoriesListByUsername = async ({
  username,
  perPage = 3,
  page,
}) => {
  const githubRepositoriesList = await api.get(
    `${username}/repos?per_page=${perPage}&page=${page}`
  );

  return githubRepositoriesList.data.map(repo => ({
    url: repo.clone_url,
    name: repo.name,
  }));
};
