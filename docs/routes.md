# Routes

## Auth

- [x] POST /login
- [x] POST /register

## Users

- [x] GET /users/:userId
- [x] PATCH /users/:userId
- [x] DELETE /users/:userId

## Organisations

- [x] GET /orgs
- [x] GET /orgs/:orgId
- [x] POST /orgs
- [x] POST /orgs/:orgId - Add user to org
- [x] DELETE /orgs/:orgId

## Teams

- [x] GET /teams
- [x] GET /orgs/:orgId/teams
- [x] GET /orgs/:orgId/teams/:teamId
- [x] POST /orgs/:orgId/teams
- [x] POST /orgs/:orgId/teams/:teamId - Add user to team
- [x] DELETE /orgs/:orgId/teams/:teamId

## Projects

- [x] GET /projects
- [x] GET /projects/:projectId
- [x] GET /orgs/:orgId/projects
- [x] GET /orgs/:orgId/teams/:teamId/projects
- [x] POST /orgs/:orgId/teams/:teamId/projects
- [x] POST /orgs/:orgId/teams/:teamId/projects/:projectId - Add user to org
- [x] DELETE /orgs/:orgId/teams/:teamId/projects/:projectId

## Boards

- [x] GET /projects/:projectId/board
- [x] GET /projects/:projectId/board/columns
- [x] GET /projects/:projectId/board/columns/:columnId
- [x] POST /projects/:projectId/board/columns
- [x] PATCH /projects/:projectId/board/columns/:columnId
- [x] DELETE /projects/:projectId/board/columns/:columnId

## Tasks

- [ ] GET /projects/:projectId/tasks
- [ ] GET /projects/:projectId/tasks/:taskId
- [ ] GET /projects/:projectId/board/columns/:columnId/tasks
- [ ] POST /projects/:projectId/tasks
- [ ] POST /projects/:projectId/board/columns/:columnId/tasks
- [ ] PATCH /projects/:projectId/tasks/:taskId
- [ ] DELETE /projects/:projectId/tasks/:taskId

## Sprints

- [ ] GET /projects/:projectId/sprints
- [ ] GET /projects/:projectId/sprints/:sprintId
- [ ] POST /projects/:projectId/sprints
- [ ] PATCH /projects/:projectId/sprints/:sprintId
- [ ] DELETE /projects/:projectId/sprints/:sprintId