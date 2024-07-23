import { Task } from "@/interface/task";
import { TaskStatus } from "@/utils/enum/taskEnum";
import { useMemo } from "react";

export const useTaskFilters = (tasks: Task[] | undefined) => {

	const pendingTasks = useMemo(
		() => tasks?.filter(task => task.status === TaskStatus.pending) || [],
		[tasks]
	);


	const processingTasks = useMemo(
	  () => tasks?.filter(task => task.status === TaskStatus.inProgress) || [],
	  [tasks]
	);
  
	const finishedTasks = useMemo(
	  () => tasks?.filter(task => task.status === TaskStatus.complete) || [],
	  [tasks]
	);
  
	return { pendingTasks, processingTasks, finishedTasks };
};
  