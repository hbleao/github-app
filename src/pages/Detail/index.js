import React, { useEffect, useState, useCallback } from 'react';

import './styles.scss';

import {
  Header,
  Profile,
  RepositoryInfo,
  RepositoryCard,
  Pagination,
} from '@/components';

import { useUserContext } from '@/hooks/useUserContext';

import { getRepositoriesListByUsername } from '@/services/githubService';

export const Detail = () => {
  const { user, totalUserRepositories } = useUserContext();

  const [repositories, setRepositories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const totalRepositoriesByPage = 3;

  async function getRepositories(page) {
    const userRepositoriesInfo = await getRepositoriesListByUsername({
      username: user.login,
      perPage: totalRepositoriesByPage,
      page,
    });

    setRepositories(userRepositoriesInfo);
  }

  const handlePagination = useCallback(
    page => {
      setActivePage(page);
      getRepositories(page);
    },
    [getRepositories]
  );

  function handleGotoRepository(url) {
    window.location.href = url;
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <div className="detail container">
      <Header onClick={() => window.history.back()} />

      <Profile
        name={user.name}
        bio={user.bio}
        avatarUrl={user.avatarUrl}
        size="is-md"
      />

      <div className="detail__repoInformation">
        <RepositoryInfo value={user.followers} description="Seguidores" />
        <RepositoryInfo value={user.following} description="Seguindo" />
      </div>

      <div className="detail__repositories">
        {repositories.length > 0 &&
          repositories.map(repo => (
            <RepositoryCard
              key={repo.name}
              onClick={() => handleGotoRepository(repo.url)}
              content={<p> {repo.name} </p>}
            />
          ))}
        {repositories.length > 0 && (
          <Pagination
            total={parseInt(
              totalUserRepositories / totalRepositoriesByPage,
              10
            )}
            activePage={activePage}
            onClick={page => handlePagination(page)}
          />
        )}
      </div>
    </div>
  );
};
