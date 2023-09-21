import prisma from "./database";

(async () => {

  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } }
  });
  console.log(students);

  const studentsWithoutJob = await prisma.student.groupBy({
    by: ["class"],
    where: { jobId: { equals: null } },
    _count: { _all: true },
    orderBy: { _count: { id: "desc" } }
  });
  console.log(studentsWithoutJob);

})