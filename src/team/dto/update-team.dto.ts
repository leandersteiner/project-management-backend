import { User } from 'src/user/user.schema';

export interface UpdateTeamDto {
  readonly name: string;
  readonly private: boolean;
  readonly owner: User;
}
