import { Team } from 'src/team/team.schema';

export interface CreateProjectDto {
  readonly name: string;
  readonly private: boolean;
  readonly team: Team;
}
