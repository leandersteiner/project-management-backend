import { Team } from 'src/team/team.schema';

export interface CreateProjectDto {
  readonly name: string;
  readonly team: Team;
  readonly private: boolean;
}
