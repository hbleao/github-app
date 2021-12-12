import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

import {
  Title,
  InputSearch,
  RepositoryCard,
  Profile,
  Header,
} from '@/components';

import { useUserContext } from '@/hooks/useUserContext';

import { getRepositoryByUsername } from '@/services/githubService';

import BgSvg from '@/assets/images/github-background.svg';

export const Home = () => {
  const navigate = useHistory();
  const { setUser, setTotalUserRepositories } = useUserContext();
  const [searchInputValue, setSearchInputValue] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [validation, setValidation] = useState(false);

  const handleGetRepositoryByUsername = useCallback(async () => {
    try {
      const userRepositoryInfo = await getRepositoryByUsername(
        searchInputValue
      );

      setRepositories([...repositories, userRepositoryInfo]);
    } catch (error) {
      setValidation(true);
    }
  }, [searchInputValue, repositories]);

  const handleGetRepositoriesListByUsername = async userRepositoryInfo => {
    setUser(userRepositoryInfo);
    setTotalUserRepositories(userRepositoryInfo.publicRepos);
    navigate.push('detail');
  };

  function handleVerifyErrorValidation() {
    if (validation) {
      setValidation(false);
    }
  }

  useEffect(() => {
    handleVerifyErrorValidation();
  }, [searchInputValue]);

  return (
    <section className="github container">
      <Header />
      <BgSvg className="github__bg" />
      <Title className="github__title">Explore repositórios no github</Title>
      <InputSearch
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value)}
        onClick={handleGetRepositoryByUsername}
        placeholder="Digite seu username do github..."
        error={validation}
      />
      <div className="github__repositories">
        {repositories.length > 0 &&
          repositories.map(repo => (
            <RepositoryCard
              key={repo.id}
              onClick={() => handleGetRepositoriesListByUsername(repo)}
              content={
                <Profile
                  size="is-sm"
                  avatarUrl={repo.avatarUrl}
                  name={repo.name}
                  bio={repo.bio}
                  alternativeTexAvatarUrl={`Photo ${repo.name}`}
                />
              }
            />
          ))}
      </div>
    </section>
  );
};
