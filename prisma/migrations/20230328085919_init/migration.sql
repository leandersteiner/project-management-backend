-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL,
    CONSTRAINT "Project_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Board" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Board_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BoardColumn" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    CONSTRAINT "BoardColumn_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TaskState" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "TaskState_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,
    "columnId" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "sprintId" TEXT,
    CONSTRAINT "Task_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "TaskState" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "BoardColumn" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "Sprint" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sprint" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Sprint_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TeamToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TeamToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TeamToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeamToUser_AB_unique" ON "_TeamToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamToUser_B_index" ON "_TeamToUser"("B");
