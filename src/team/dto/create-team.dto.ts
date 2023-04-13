import { User } from 'src/user/user.schema';

export interface CreateTeamDto {
  readonly name: string;
  readonly private: boolean;
  readonly owner: User;
}
