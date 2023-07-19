import type { Meta, StoryObj } from '@storybook/react';
import { GithubOwnRepositoryList } from './github-own-repository-list';

type ComponentType = typeof GithubOwnRepositoryList;

export default {
  title: 'GithubOwnRepositoryList',
  component: GithubOwnRepositoryList
} satisfies Meta<ComponentType>;

export const Default: StoryObj<ComponentType> = {
  render: () => <GithubOwnRepositoryList />
};