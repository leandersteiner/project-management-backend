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

- [x] GET /projects/:projectId/tasks
- [x] GET /projects/:projectId/tasks/:taskId
- [x] GET /projects/:projectId/board/columns/:columnId/tasks
- [x] POST /projects/:projectId/board/columns/:columnId/tasks
- [x] POST /projects/:projectId/board/columns/:columnId/tasks/:taskId/subtasks
- [x] PATCH /projects/:projectId/tasks/:taskId
- [x] PATCH /projects/:projectId/board/columns/:columnId/tasks/:taskId/subtasks/:subtaskId
- [x] DELETE /projects/:projectId/tasks/:taskId
- [x] Delete /projects/:projectId/board/columns/:columnId/tasks/:taskId/subtasks/:subtaskId

## Sprints

- [x] GET /projects/:projectId/sprints
- [x] GET /projects/:projectId/sprints/:sprintId
- [x] POST /projects/:projectId/sprints
- [x] PATCH /projects/:projectId/sprints/:sprintId
- [x] DELETE /projects/:projectId/sprints/:sprintId