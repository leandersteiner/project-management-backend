import { Team } from 'src/team/team.schema';

export interface UpdateProjectDto {
  readonly name: string;
  readonly team: Team;
  readonly private: boolean;
}
