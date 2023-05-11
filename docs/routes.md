# Routes

## Auth

- POST /login
- POST /register

## Users

- GET /users/:userId
- DELETE /users/:userId

## Organisations

- GET /orgs
- GET /orgs/:orgId
- POST /orgs
- POST /orgs/:orgId - Add user to org
- DELETE /orgs/:orgId

## Teams

- GET /orgs/:orgId/teams
- GET /orgs/:orgId/teams/:teamId
- POST /orgs/:orgId/teams
- POST /orgs/:orgId/teams/:teamId - Add user to team
- DELETE /orgs/:orgId/teams/:teamId

## Projects

- GET /projects
- GET /orgs/:orgId/projects
- GET /orgs/:orgId/projects/:projectId
- GET /projects/:projectId
- POST /projects
- POST /orgs/:orgId/projects
- POST /orgs/:orgId - Add user to org
- DELETE /orgs/:orgId
- DELETE /orgs/:orgId/projects/:projectId

## Boards

- GET /projects/:projectId/board
- GET /projects/:projectId/board/columns
- GET /projects/:projectId/board/columns/:columnId
- POST /projects/:projectId/board/column
- PATCH /projects/:projectId/board/column/:columnId
- DELETE /projects/:projectId/tasks/:taskId

## Tasks

- GET /projects/:projectId/tasks
- GET /projects/:projectId/tasks/:taskId
- GET /projects/:projectId/board/columns/:columnId/tasks
- POST /projects/:projectId/tasks
- POST /projects/:projectId/board/columns/:columnId/tasks
- PATCH /projects/:projectId/tasks/:taskId
- DELETE /projects/:projectId/tasks/:taskId

## Sprints

- GET /projects/:projectId/sprints
- GET /projects/:projectId/sprints/:sprintId
- POST /projects/:projectId/sprints
- PATCH /projects/:projectId/sprints/:sprintId
- DELETE /projects/:projectId/sprints/:sprintId