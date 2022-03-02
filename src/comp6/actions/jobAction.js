export const UPDATE_JOB = 'UPDATE_JOB'

export function updateJob(newJob) {
    return {
        type: UPDATE_JOB,
        payload: {
            job: newJob
        }
    }

}